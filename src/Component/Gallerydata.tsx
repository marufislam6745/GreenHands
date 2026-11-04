import { Events } from '@/type';
import Image from 'next/image';
import React from 'react';

const Gallerydata = async () => {

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/gallery`)
    const data: Events[] = await res.json()
    const sortdata = data.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

    return (
        <div className=" px-4 sm:px-6 lg:px-8 bg-green-50">
            <div className="max-w-7xl mx-auto px-4">
                <div className='text-center'>
                    <p className='inline-block bg-green-100 text-green-700 py-0.5 px-3 rounded-lg'>Our Stories</p>
                    <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-900 mt-2 mb-6">Community in Action</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                    {sortdata.map((event) => (
                        <div
                            key={event._id}
                            className="group relative h-55 sm:h-60 rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300"
                        >

                            {/* Background Image */}
                            <Image
                                src={event.image}
                                alt={event.title}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                            />

                            {/* Dark Gradient Overlay */}
                            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent"></div>

                            {/* Event Content */}
                            <div className="absolute bottom-0 left-0 w-full p-5">

                                {/* Category */}
                                <span className="inline-block bg-green-600 text-white text-[10px] sm:text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-md mb-2">
                                    {event.type}
                                </span>

                                {/* Title */}
                                <h3 className="text-white text-lg sm:text-xl font-bold leading-tight mb-2">
                                    {event.title}
                                </h3>

                                {/* Location */}
                                <div className="flex items-center gap-1.5 text-gray-200 text-xs sm:text-sm">
                                    <p>{event.date}</p>
                                </div>

                            </div>

                        </div>
                    ))}

                </div>
            </div> 
        </div>
    );
};

export default Gallerydata;