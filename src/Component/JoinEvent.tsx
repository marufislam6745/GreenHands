'use client'
import { Events } from '@/type';
import React from 'react';
import toast from 'react-hot-toast';


const JoinEvent = ({ data }: { data: Events }) => {
    //console.log(data)
    const handleJoin = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const userdata = {
            ...data,
            joinDate: new Date().toDateString()
        }
        //console.log(userdata)
        const res=await fetch(`http://localhost:5000/join`,{
            method:"POST",
            headers:{
                'content-Type': 'application/json'
            },
            body:JSON.stringify(userdata)
        })
        const joindata=await res.json()
        if(joindata){
            toast.success('Join this event successfully')
        }
    }


    return (
        <div>
            <form onSubmit={handleJoin}>
                <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-md space-y-6 h-fit">

                    {/* Date */}
                    <div className="flex items-start gap-4">
                        <div className="bg-green-100 p-3 rounded-xl">
                            <span className="text-2xl">📅</span>
                        </div>

                        <div>
                            <h3 className="font-bold text-gray-900">
                                Date & Time
                            </h3>
                            <p className="text-gray-500 mt-1">
                                {data.date}
                            </p>
                        </div>
                    </div>

                    <div className="border-b border-gray-100"></div>

                    {/* Location */}
                    <div className="flex items-start gap-4">
                        <div className="bg-green-100 p-3 rounded-xl">
                            <span className="text-2xl">📍</span>
                        </div>

                        <div>
                            <h3 className="font-bold text-gray-900">
                                Location
                            </h3>
                            <p className="text-gray-500 mt-1">
                                {data.location}
                            </p>
                        </div>
                    </div>


                    {/* Join Button */}
                    <button type="submit" className="w-full bg-green-600 hover:bg-green-800 text-white font-semibold py-3.5 rounded-xl transition-all duration-300 hover:shadow-lg active:scale-95">
                        Join This Event →
                    </button>


                </div>
            </form>
        </div>
    );
};

export default JoinEvent;