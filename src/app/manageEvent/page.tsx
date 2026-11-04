import { auth } from '@/lib/auth';
import { Events } from '@/type';
import { headers } from 'next/headers';
import Image from 'next/image';
import { MapPin, CalendarDays } from "lucide-react";
import React from 'react';
import { EditeventPage } from '@/Component/Editevent';
import DeleteEvent from '@/Component/DeleteEvent';
import { getTokenServer } from '@/lib/getTokenServer';

const page = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    })

    const token = await getTokenServer()

    const res = await fetch(`http://localhost:5000/events/${session?.user.email}`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    })
    const eventdata: Events[] = await res.json()

    const sortEvents = eventdata.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())

    return (
        <div className="min-h-screen bg-green-50 px-4 py-10 md:px-8">

            {/* Header */}
            <div className="max-w-7xl mx-auto mb-8">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                    Manage My Events
                </h1>
                <p className="text-gray-500 mt-2">
                    View, edit and manage the social drives you have published.
                </p>
            </div>

            {/* Event Cards */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                {sortEvents.map((data) => (
                    <div
                        key={data._id}
                        className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
                    >

                        {/* Image */}
                        <div className="relative h-52 overflow-hidden">
                            <Image
                                src={data.image}
                                alt={data.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />

                            <span className="absolute top-4 left-4 bg-white/95 text-green-700 text-xs font-semibold px-3 py-2 rounded-full shadow">
                                {data.type}
                            </span>
                        </div>

                        {/* Content */}
                        <div className="p-5">

                            <div className="flex items-center gap-2 text-sm text-green-600 mb-3">
                                <CalendarDays size={17} />
                                <span>{data.date}</span>
                            </div>

                            <h2 className="text-xl font-bold text-gray-800 mb-3 line-clamp-1">
                                {data.title}
                            </h2>

                            <div className="flex items-center gap-2 text-gray-500 text-sm mb-5">
                                <MapPin size={17} className="text-green-600 shrink-0" />
                                <span className="line-clamp-1">{data.location}</span>
                            </div>

                            {/* Buttons */}
                            <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                                <EditeventPage data={data}></EditeventPage>

                                <DeleteEvent data={data}></DeleteEvent>
                            </div>
                        </div>
                    </div>
                ))}

            </div>

            {/* Empty State */}
            {eventdata?.length === 0 && (
                <div className="text-center py-20">
                    <h2 className="text-xl font-bold text-gray-700">
                        No Events Found!
                    </h2>
                    <p className="text-gray-500 mt-2">
                        You haven`t published any events yet.
                    </p>
                </div>
            )}

        </div>

    );
};

export default page;