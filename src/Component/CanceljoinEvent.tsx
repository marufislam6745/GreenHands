'use client'
import React from 'react';
import { Trash2 } from "lucide-react";
import { Events } from '@/type';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { getTokenClient } from '@/lib/getTokenClient';

const CanceljoinEvent = ({ event }: { event: Events }) => {

    const router = useRouter()
    const handleCancelbtn = async () => {
        const token=await getTokenClient()
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/joins/${event._id}`, {
            method: "DELETE",
            headers: {
                authorization: `Bearer ${token}`
            }
        })
        const cancelJoin = await res.json()

        if (cancelJoin) {
            toast.success('Event delete successfully')
        }
        else {
            toast.error(cancelJoin.message || 'Something wrong!')
        }
        if (cancelJoin.deletedCount > 0) {
            router.refresh()
        }
    }

    return (
        <div>
            <button
                onClick={handleCancelbtn}
                className="w-full text-lg bg-red-100 text-red-700 py-2 rounded-xl font-semibold hover:bg-red-600 hover:text-white transition flex items-center justify-center gap-2"
            >
                <Trash2 size={17} />  Leave event
            </button>
        </div>
    );
};

export default CanceljoinEvent;