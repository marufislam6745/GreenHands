'use client'
import { Trash2 } from "lucide-react";
import React from 'react';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { Events } from "@/type";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { getTokenClient } from "@/lib/getTokenClient";

const DeleteEvent = ({ data }: { data: Events }) => {

    const router = useRouter()
    const handledeletbtn = async () => {
        const token = await getTokenClient()

        const res = await fetch(`http://localhost:5000/events/${data._id}`, {
            method: "DELETE",
            headers: {
                authorization: `Bearer ${token}`
            }
        })
        const deletedata = await res.json()
        if (deletedata) {
            toast.success('Event delete successfully')
        }
        else {
            toast.error(deletedata.message || 'Something wrong!')
        }
        if (deletedata.deletedCount > 0) {
            router.refresh()
        }
    }

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button className="flex-1 flex items-center justify-center gap-2 bg-red-50 text-red-600 py-5.5 rounded-xl font-semibold hover:bg-red-500 hover:text-white transition">
                    <Trash2 size={16} /> Delete
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete your account
                        from our servers.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={handledeletbtn} className='bg-white hover:bg-red-500 hover:text-white text-red-500 border-red-500'>Delete</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
};

export default DeleteEvent;