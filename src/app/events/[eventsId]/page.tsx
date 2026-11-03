import JoinEvent from '@/Component/JoinEvent';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';



interface ParamsProps {
    params: Promise<{
        eventsId: string
    }>
}

const page = async ({ params }: ParamsProps) => {
    const { eventsId } = await params
    const res = await fetch(`http://localhost:5000/events/${eventsId}`)
    const data = await res.json()


    return (
        <div className='bg-green-50'>
            <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
                <Link href={'/events'}><p className='text-gray-400 pt-6 mb-9'>→ back</p></Link>
                {/* Event Image */}
                <div className="overflow-hidden rounded-2xl shadow-lg">
                    <Image
                        src={data.image}
                        alt={data.title}
                        width={1200}
                        height={500}
                        className="w-full h-62 sm:h-87 lg:h-112 object-cover hover:scale-105 transition-transform duration-500"
                    />
                </div>

                {/* Event Details */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">

                    {/* Left Content */}
                    <div className="lg:col-span-2 space-y-2">

                        <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                            {data.type}
                        </span>

                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                            {data.title}
                        </h2>

                        <p className="text-gray-600 text-base sm:text-lg">
                            {data.description}
                        </p>
                        <h3 className='text-lg font-bold'>What to bring</h3>
                        <p className="text-gray-600 text-lg">
                            Join our community and make a difference.Together, we grow stronger communities.
                            Your time can change someone’s day.
                        </p>

                    </div>

                    {/* Right Information Card */}
                    <JoinEvent data={data}></JoinEvent>
                </div>
            </div>
        </div>
    );
};

export default page;