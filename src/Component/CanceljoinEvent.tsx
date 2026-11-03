'use client'
import React from 'react';
import { Trash2 } from "lucide-react";
import { Events } from '@/type';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const CanceljoinEvent = ({ event }: { event: Events }) => {
    
    const router=useRouter()
    const handleCancelbtn = async () => {
        const res = await fetch(`http://localhost:5000/join/${event._id}`, {
            method: "DELETE"
        })
        const cancelJoin = await res.json()
        if (cancelJoin) {
            toast.success('Event delete successfully')
        }
        else {
            toast.error(cancelJoin.message || 'Something wrong!')
        }
        if(cancelJoin.deletedCount > 0){
            router.refresh()
        }
    }

    return (
        <div>
            <button
                onClick={handleCancelbtn}
                className="w-full text-lg bg-red-100 text-red-700 py-2 rounded-xl font-semibold hover:bg-red-600 hover:text-white transition flex items-center justify-center gap-2"
            >
                <Trash2 size={17} />  Join Cancel
            </button>
        </div>
    );
};

export default CanceljoinEvent;