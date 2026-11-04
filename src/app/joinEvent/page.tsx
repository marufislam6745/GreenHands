import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import Image from 'next/image';
import React from 'react';
import { MapPin, CalendarDays } from "lucide-react";
import { Events } from '@/type';
import CanceljoinEvent from '@/Component/CanceljoinEvent';
import { getTokenServer } from '@/lib/getTokenServer';




const JoinEvent = async () => {

    const session = await auth.api.getSession({
        headers: await headers()
    })
    const token = await getTokenServer()
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/join/${session?.user.email}`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    })
    const data: Events[] = await res.json()
    const sortJoin = data.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())

    return (
        <div className="min-h-screen bg-green-50 px-4 py-12">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-5">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Join this all Events
                    </h1>
                    <p className="text-gray-500 mt-2">
                        Together, we grow stronger communities.
                        Your time can change someone’s day.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 animate-in fade-in slide-in-from-bottom-3 duration-500 mt-9">
                    {
                        sortJoin.map((event) => <div
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
                                <div className="items-center gap-3 pt-4 border-t border-gray-100">
                                    <CanceljoinEvent event={event}></CanceljoinEvent>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default JoinEvent;