import ShowEvent from '@/Component/ShowEvent';
import React from 'react';




const page = async () => {
    const res = await fetch(`http://localhost:5000/events`)
    const events = await res.json()
    return (
        <div className="min-h-screen bg-green-50 px-4 py-12">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-5">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Upcoming all Events
                    </h1>
                    <p className="text-gray-500 mt-2">
                        Join our community and make a difference.Together, we grow stronger communities.
                        Your time can change someone’s day.
                    </p>
                </div>
                <div>
                    <ShowEvent events={events}></ShowEvent>
                </div>
            </div>
        </div>
    );
};

export default page;