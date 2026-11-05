"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
    Popover,
    PopoverContent,
    PopoverDescription,
    PopoverHeader,
    PopoverTitle,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Avatar, AvatarFallback, AvatarImage, AvatarBadge } from "@/components/ui/avatar"
import { HiOutlineLogout } from "react-icons/hi";
import { MdOutlineDateRange } from "react-icons/md";
import { FcApproval } from "react-icons/fc";
import { FcPlus } from "react-icons/fc";
import { MdManageAccounts } from "react-icons/md";
import { redirect } from "next/navigation";
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"




export default function Navbar() {
    const { setTheme } = useTheme()
    const [menuOpen, setMenuOpen] = useState(false);

    const { data: session } = authClient.useSession()
    //console.log(session?.user)
    const handleLogOut = () => {
        authClient.signOut()
        redirect('/')
    }

    return (
        <nav className="w-full bg-white dark:bg-black border-b border-gray-100 shadow-sm">
            <div className="max-w-7xl mx-auto px-5">

                <div className="h-17 flex items-center justify-between">

                    {/* Logo */}
                    <div className="flex items-center justify-center">
                        <Image src={'/svgviewer-output (1).svg'} alt="svg" width={150} height={80}></Image>
                        <div>
                            <h2 className="text-[#079B85] font-bold text-lg leading-5">

                            </h2>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center">
                        <Link
                            href="/events"
                            className="flex items-center gap-2 text-base font-medium text-gray-500 hover:text-green-800 transition"
                        >
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.8"
                            >
                                <rect x="3" y="5" width="18" height="16" rx="2" />
                                <path d="M16 3v4M8 3v4M3 11h18" />
                            </svg>
                            Upcoming Events
                        </Link>
                    </div>

                    {/* Right Actions */}
                    <div className="flex items-center gap-3">

                        {/* Theme Button */}
                        {/* <button
                            onClick={() => setDark(!dark)}
                            className="w-9 h-9 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-100 transition"
                            aria-label="Toggle theme"
                        >
                            {dark ? "☀️" : "🌙"}
                        </button> */}
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" size="icon">
                                    <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                                    <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                                    <span className="sr-only">Toggle theme</span>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuItem onClick={() => setTheme("light")}>
                                    Light
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => setTheme("dark")}>
                                    Dark
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>

                        <div className="hidden items-center gap-4 text-sm md:flex">
                            {
                                session?.user ?
                                    <div className="flex items-center justify-center gap-2">
                                        < Popover >
                                            <PopoverTrigger asChild>

                                                <Avatar>
                                                    <AvatarImage src={`${session?.user.image}`} />
                                                    <AvatarFallback>{session?.user.name.charAt(0)}</AvatarFallback>
                                                    <AvatarBadge className="bg-green-600 dark:bg-green-800"></AvatarBadge>
                                                </Avatar>

                                            </PopoverTrigger>
                                            <PopoverContent>
                                                <PopoverHeader>
                                                    <PopoverTitle>{session?.user.name}</PopoverTitle>
                                                    <PopoverDescription>{session?.user.email} </PopoverDescription>
                                                    <PopoverTitle className="text-base font-bold border-t border-gray-300 hover:bg-gray-100"><Link href='/createEvent' className="flex items-center gap-1"><FcPlus /> Create Events</Link></PopoverTitle>
                                                    <PopoverTitle className="text-base font-bold hover:bg-gray-100"><Link href='/manageEvent' className="flex items-center gap-1"><MdManageAccounts className="text-purple-500" /> Manage Events </Link></PopoverTitle>
                                                    <PopoverTitle className="text-base font-bold hover:bg-gray-100"><Link href='/joinEvent' className="flex items-center gap-1"><FcApproval /> Joined Events</Link></PopoverTitle>
                                                </PopoverHeader>
                                            </PopoverContent>
                                        </Popover>
                                        <button onClick={handleLogOut} className="font-bold py-1.5 px-3 border border-red-300 rounded-lg text-red-500 text-sm bg-gray-50 hover:bg-red-500 hover:text-white flex items-center gap-1">
                                            <HiOutlineLogout />   Log Out
                                        </button>
                                    </div> :
                                    <Link href="/login"
                                        className="sm:flex items-center gap-2 bg-green-800 hover:bg-green-900 text-white px-5 py-2.5 rounded-xl text-sm font-semibold shadow-sm transition"
                                    >
                                        <span>↪</span>
                                        Login
                                    </Link>
                            }
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="md:hidden text-gray-700 text-2xl"
                            aria-label="Toggle menu"
                        >
                            {menuOpen ? "✕" : "☰"}
                        </button>
                    </div>
                </div>

                {/* Mobile Dropdown */}
                {menuOpen && (
                    <div className="md:hidden border-t border-gray-100 py-4 space-y-4">

                        <Link
                            href="/events"
                            onClick={() => setMenuOpen(false)}
                            className="text-base font-bold text-gray-600 hover:text-green-800 flex items-center"
                        >
                            <MdOutlineDateRange className="mr-2" /> Upcoming Events
                        </Link>
                        {
                            session?.user ?
                                <div className="flex items-center justify-start gap-2">
                                    < Popover >
                                        <PopoverTrigger asChild>

                                            <Avatar>
                                                <AvatarImage src={`${session?.user.image}`} />
                                                <AvatarFallback>{session?.user.name.charAt(0)}</AvatarFallback>
                                                <AvatarBadge className="bg-green-600 dark:bg-green-800"></AvatarBadge>
                                            </Avatar>

                                        </PopoverTrigger>
                                        <PopoverContent>
                                            <PopoverHeader>
                                                <PopoverTitle>{session?.user.name}</PopoverTitle>
                                                <PopoverDescription>{session?.user.email} </PopoverDescription>
                                                <PopoverTitle className="text-base font-bold border-t border-gray-300 hover:bg-gray-100"><Link href='/createEvent' className="flex items-center gap-1"><FcPlus /> Create Events</Link></PopoverTitle>
                                                <PopoverTitle className="text-base font-bold hover:bg-gray-100"><Link href='/manageEvent' className="flex items-center gap-1"><MdManageAccounts className="text-purple-500" /> Manage Events </Link></PopoverTitle>
                                                <PopoverTitle className="text-base font-bold hover:bg-gray-100"><Link href='/joinEvent' className="flex items-center gap-1"><FcApproval /> Joined Events</Link></PopoverTitle>
                                            </PopoverHeader>
                                        </PopoverContent>
                                    </Popover>
                                    <button onClick={handleLogOut} className="font-bold py-1 px-3 border border-red-300 rounded-lg text-red-500 text-sm bg-gray-50 hover:bg-red-500 hover:text-white flex items-center gap-1">
                                        <HiOutlineLogout />   Log Out
                                    </button>
                                </div> :
                                <Link href="/login"
                                    className="hidden sm:flex items-center gap-2 bg-green-800 hover:bg-green-900 text-white px-5 py-2.5 rounded-xl text-sm font-semibold shadow-sm transition"
                                >
                                    <span>↪</span>
                                    Login
                                </Link>
                        }
                    </div>
                )}

            </div>
        </nav >
    );
}
