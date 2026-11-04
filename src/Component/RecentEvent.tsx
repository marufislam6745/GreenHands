import { Events } from '@/type';
import Image from 'next/image';
import React from 'react';
import { MapPin, CalendarDays } from "lucide-react";
import Link from 'next/link';




const RecentEvent = async () => {
    const res = await fetch(`http://localhost:5000/recentevents`)
    const data: Events[] = await res.json()

    const sortdata = data.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    return (
        <div className="py-12 px-4 sm:px-6 lg:px-8 bg-green-50">
            <div className='max-w-7xl mx-auto'>
                <div className='text-center'>
                    <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-4">Recent Upcomming Events</h2>
                    <p>Latest 6 community drives scheduled in your city. Get involved you. </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 animate-in fade-in slide-in-from-bottom-3 duration-500 mt-9">
                    {
                        sortdata.map(((event) => <div
                            key={event._id}
                            className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
                        >

                            {/* Image */}
                            <div className="relative h-52 overflow-hidden">
                                <Image
                                    src={event.image}
                                    alt={event.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />

                                <span className="absolute top-4 left-4 bg-white/95 text-green-700 text-xs font-semibold px-3 py-2 rounded-full shadow">
                                    {event.type}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="p-5">

                                <div className="flex items-center gap-2 text-sm text-green-600 mb-3">
                                    <CalendarDays size={17} />
                                    <span>{event.date}</span>
                                </div>

                                <h2 className="text-xl font-bold text-gray-800 mb-3 line-clamp-1">
                                    {event.title}
                                </h2>

                                <div className="flex items-center gap-2 text-gray-500 text-sm mb-5">
                                    <MapPin size={17} className="text-green-600 shrink-0" />
                                    <span className="line-clamp-1">{event.location}</span>
                                </div>

                                {/* Buttons */}
                                <Link href={`/events/${event._id}`}>
                                    <button
                                        className="w-full text-lg bg-green-100 text-green-600 py-2 rounded-xl font-semibold hover:bg-green-600 hover:text-white transition"
                                    >
                                        View Events
                                    </button></Link>
                            </div>
                        </div>))
                    }
                </div>
            </div>
        </div>
    );
};

export default RecentEvent;