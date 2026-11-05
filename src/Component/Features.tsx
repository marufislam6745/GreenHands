import React from 'react';
import { Users, Settings, CalendarDays } from "lucide-react";



const Features = () => {
    return (
        <div className="py-9 px-4 sm:px-6 lg:px-8 bg-green-50 dark:bg-black">
            <div className='max-w-7xl mx-auto'>
                <div className="text-center max-w-2xl mx-auto mb-14">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-4">Built for Grassroots Action </h2>
                    <p className="text-gray-600 text-sm sm:text-base leading-7 mt-5"> Bringing people together to create meaningful change.
                        Discover opportunities, organize community initiatives
                        and make a positive impact through collective action.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="group relative bg-white border border-green-100
                                rounded-2xl p-7 sm:p-8 shadow-sm
                                hover:shadow-xl hover:-translate-y-2
                                hover:border-green-500 transition-all duration-300">
                        <div className="w-14 h-14 rounded-xl bg-green-100
                                    flex items-center justify-center
                                    group-hover:bg-green-700 transition-all duration-300">

                            <Users
                                size={28}
                                className="text-green-700
                                            group-hover:text-white transition-colors"
                            />

                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mt-7 mb-3
                                group-hover:text-green-700 transition-colors">Community-Led Drives</h3>
                        <p className="text-gray-500 leading-7 text-sm">Empower communities to organize plantation, clean-up and donation drives.</p>
                    </div>
                    <div className="group relative bg-white border border-green-100
                                rounded-2xl p-7 sm:p-8 shadow-sm
                                hover:shadow-xl hover:-translate-y-2
                                hover:border-green-500 transition-all duration-300">
                        <div className="w-14 h-14 rounded-xl bg-green-100
                                    flex items-center justify-center
                                    group-hover:bg-green-700 transition-all duration-300">

                            <Settings
                                size={28}
                                className="text-green-700
                                            group-hover:text-white transition-colors"
                            />

                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mt-7 mb-3
                                group-hover:text-green-700 transition-colors">Creator Controls</h3>
                        <p className="text-gray-500 leading-7 text-sm">Create, edit, update and manage your own events with ease.</p>
                    </div>
                    <div className="group relative bg-white border border-green-100
                                rounded-2xl p-7 sm:p-8 shadow-sm
                                hover:shadow-xl hover:-translate-y-2
                                hover:border-green-500 transition-all duration-300">
                        <div className="w-14 h-14 rounded-xl bg-green-100
                                    flex items-center justify-center
                                    group-hover:bg-green-700 transition-all duration-300">

                            <CalendarDays
                                size={28}
                                className="text-green-700
                                            group-hover:text-white transition-colors"
                            />

                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mt-7 mb-3
                                group-hover:text-green-700 transition-colors">Upcoming Events</h3>
                        <p className="text-gray-500 leading-7 text-sm">Explore upcoming community events and find opportunities to participate.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;