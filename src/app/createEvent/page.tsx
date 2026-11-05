'use client'
import React from 'react';
import { Save, ChevronDown } from "lucide-react";
import Link from 'next/link';
import toast from 'react-hot-toast';
import { authClient } from '@/lib/auth-client';
import { getTokenClient } from '@/lib/getTokenClient';




const EventcreatePage = () => {
    const today = new Intl.DateTimeFormat("en-CA", {
        timeZone: "Asia/Dhaka",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    }).format(new Date());

    const { data: session } = authClient.useSession()

    const handlesubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const data = Object.fromEntries(formData.entries())
        //console.log(addData)
        const userData = {
            name: session?.user.name,
            email: session?.user.email,
            ...data
        }

        const token = await getTokenClient()

        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/addevents`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${token}`
            },
            body: JSON.stringify(userData)
        })
        const addData = await res.json()

        if (addData) {
            toast.success('Data add Successfully')
        }
    }

    return (
        <div className="min-h-screen bg-white px-4 py-6 sm:px-6 lg:px-8">
            <div className='max-w-7xl mx-auto pl-6 text-gray-400 mb-4'>
                <Link href={'/'}>Back to home</Link>
            </div>
            {/* Page Title */}
            <h1 className="text-center text-4xl ml-5 font-light tracking-tight text-gray-900 sm:text-5xl">
                Create a Community Event
            </h1>

            {/* Form Card */}
            <div className="mx-auto mt-16 mb-6 w-full max-w-3xl border border-gray-200 bg-white p-6 shadow-md sm:p-8 lg:p-10">

                <form onSubmit={handlesubmit} className="space-y-5">

                    {/* Destination Name */}
                    <div>
                        <label className="mb-2 block text-sm font-medium text-gray-900">
                            Event title
                        </label>

                        <input
                            type="text"
                            name='title'
                            placeholder="event title"
                            required
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
                                    name='type'
                                    required
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
                                type="date"
                                name="date"
                                min={today}
                                required
                                className="w-full border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm text-gray-600 outline-none transition focus:border-green-500 focus:ring-1 focus:ring-green-500"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="mb-2 block text-sm font-medium text-gray-900">
                            Location
                        </label>

                        <input
                            type="text"
                            name="location"
                            required
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
                            type="url"
                            name="image"
                            placeholder="https://example.com/image.jpg"
                            required
                            className="w-full border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm text-gray-700 outline-none transition focus:border-green-500 focus:ring-1 focus:ring-green-500"
                        />
                    </div>

                    {/* Description */}
                    <div>
                        <label className="mb-2 block text-sm font-medium text-gray-900">
                            Description
                        </label>

                        <textarea
                            name="description"
                            required
                            placeholder="Describe the event experience..."
                            className="w-full resize-none border border-gray-200 bg-gray-50 px-3 py-3 text-sm text-gray-700 outline-none transition focus:border-green-500 focus:ring-1 focus:ring-green-500"
                        ></textarea>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col justify-end gap-3 pt-3 sm:flex-row">

                        {/* Submit */}
                        <button
                            type="submit"
                            className="flex items-center justify-center gap-2 bg-green-700 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-green-900"
                        >
                            <Save size={16} />
                            Add Event
                        </button>

                    </div>

                </form>
            </div>
        </div>
    );
};

export default EventcreatePage;