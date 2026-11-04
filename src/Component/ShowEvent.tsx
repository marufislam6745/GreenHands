'use client'
import { Events } from '@/type';
import Image from 'next/image';
import React, { useState } from 'react';
import { MapPin, CalendarDays } from "lucide-react";
import Link from 'next/link';
import { SearchBar } from './SearchBar';


const categories = [
    "All",
    "Tree plantation",
    "Clean-up",
    "Blood donation",
];

const ShowEvent = ({ events }: { events: Events[] }) => {
    const [activeTab, setActiveTab] = useState('All')
    const filteredEvents = activeTab === "All" ? events : events.filter((event) => event.type === activeTab);

    const sortEvents = filteredEvents.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())

    return (
        <div className="min-h-screen bg-green-50 px-4 py-12">
            <div className="max-w-7xl mx-auto">

                {/* Heading
                <div className="text-center mb-10">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Explore Events
                    </h1>
                    <p className="text-gray-500 mt-2">
                        Join our community and make a difference.
                    </p>
                </div> */}

                {/* Tabs */}
                <div className='lg:flex items-center justify-between'>
                    <div className="flex flex-wrap justify-center gap-3 mb-10">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveTab(category)}
                                className={`px-5 py-2 rounded-full font-semibold transition-all duration-300 ${activeTab === category
                                    ? "bg-green-600 text-white shadow-lg shadow-green-200"
                                    : "bg-white text-gray-600 hover:bg-green-50 hover:text-green-600"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                    <SearchBar></SearchBar>
                </div>

                {/* Event Cards */}
                <div
                    key={activeTab}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 animate-in fade-in slide-in-from-bottom-3 duration-500"
                >
                    {sortEvents.map((event) => (
                        <div
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
                                    <Link href={`/events/${event._id}`}>
                                        <button
                                            className="w-full bg-green-100 text-green-700 py-2.5 rounded-xl font-semibold hover:bg-green-600 hover:text-white transition"
                                        >
                                            View Details
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Empty State */}
                {filteredEvents.length === 0 && (
                    <p className="text-center text-gray-500 py-16">
                        No events found!
                    </p>
                )}

            </div>
        </div>
    );
};

export default ShowEvent;