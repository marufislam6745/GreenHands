'use client'
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { FieldGroup } from "@/components/ui/field"
import { getTokenClient } from "@/lib/getTokenClient";
import { Events } from "@/type";
import { Pencil } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";



export function EditeventPage({ data }: { data: Events }) {

    const router = useRouter()
    const [form, setForm] = useState(data)
    const update = (field: keyof typeof form, value: string) =>
        setForm((current) => ({ ...current, [field]: value }));

    const today = new Intl.DateTimeFormat("en-CA", {
        timeZone: "Asia/Dhaka",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    }).format(new Date());

    const handleEditbtn = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const editdata = Object.fromEntries(formData.entries())
        //console.log(editdata)
        const token = await getTokenClient()

        const res = await fetch(`http://localhost:5000/events/${data._id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${token}`
            },
            body: JSON.stringify(editdata)
        })
        const updateData = await res.json()

        if (updateData) {
            toast.success('Data update successfully')
        }
        //console.log(updateData)
        if (updateData.modifiedCount > 0) {
            router.refresh()
        }
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="flex-1 flex items-center justify-center gap-2 bg-green-100 text-green-700 py-5.5  rounded-xl font-semibold hover:bg-green-600 hover:text-white transition"><Pencil size={16} /> Edit</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-sm lg:max-w-2xl">
                <form onSubmit={handleEditbtn}>
                    <DialogHeader>
                        <DialogTitle className="py-3">Edit Events</DialogTitle>
                    </DialogHeader>
                    <FieldGroup>
                        <div>
                            <label className="mb-2 block text-sm font-medium text-gray-900">
                                Event title
                            </label>

                            <input
                                value={form.title}
                                onChange={(e) => update("title", e.target.value)}
                                type="text"
                                name='title'
                                placeholder="event title"
                                className="w-full border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm text-gray-700 outline-none transition focus:border-green-500 focus:ring-1 focus:ring-green-500"
                            />
                        </div>

                        {/* category + Duration */}
                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                            {/* Category */}
                            <div>
                                <label className="mb-2 block text-sm font-medium text-gray-900">
                                    Event type
                                </label>

                                <div className="relative">
                                    <select
                                        onChange={(e) => update("type", e.target.value)}
                                        name='type'
                                        className="w-full appearance-none border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm text-gray-700 outline-none transition focus:border-green-500 focus:ring-1 focus:ring-green-500"
                                        defaultValue="Tree plantation"
                                    >
                                        <option value="Tree plantation">Tree plantation</option>
                                        <option value="Clean-up">Clean-up</option>
                                        <option value="Blood donation">Blood donation</option>
                                    </select>

                                    <ChevronDown
                                        size={18}
                                        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                                    />
                                </div>
                            </div>

                            {/* Departure Date */}
                            <div>
                                <label className="mb-2 block text-sm font-medium text-gray-900">
                                    Event Date
                                </label>

                                <input
                                    value={form.date}
                                    onChange={(e) => update('date', e.target.value)}
                                    type="date"
                                    name="date"
                                    min={today}
                                    className="w-full border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm text-gray-600 outline-none transition focus:border-green-500 focus:ring-1 focus:ring-green-500"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="mb-2 block text-sm font-medium text-gray-900">
                                Location
                            </label>

                            <input
                                value={form.location}
                                onChange={(e) => update('location', e.target.value)}
                                type="text"
                                name="location"
                                placeholder='event location'
                                className="w-full border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm text-gray-600 outline-none transition focus:border-green-500 focus:ring-1 focus:ring-green-500"
                            />
                        </div>

                        {/* Image URL */}
                        <div>
                            <label className="mb-2 block text-sm font-medium text-gray-900">
                                Image URL
                            </label>

                            <input
                                value={form.image}
                                onChange={(e) => update('image', e.target.value)}
                                type="url"
                                name="image"
                                placeholder="https://example.com/image.jpg"
                                className="w-full border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm text-gray-700 outline-none transition focus:border-green-500 focus:ring-1 focus:ring-green-500"
                            />
                        </div>

                        {/* Description */}
                        <div>
                            <label className="mb-2 block text-sm font-medium text-gray-900">
                                Description
                            </label>

                            <textarea
                                value={form.description}
                                onChange={(e) => update('description', e.target.value)}
                                name="description"
                                placeholder="Describe the event experience..."
                                className="w-full resize-none border border-gray-200 bg-gray-50 px-3 py-3 text-sm text-gray-700 outline-none transition focus:border-green-500 focus:ring-1 focus:ring-green-500"
                            ></textarea>
                        </div>
                    </FieldGroup>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant="outline">Cancel</Button>
                        </DialogClose>
                        <DialogClose asChild>
                            <Button type="submit">Save changes</Button>
                        </DialogClose>

                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}
