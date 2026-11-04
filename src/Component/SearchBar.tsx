'use client'
import { Search } from "lucide-react"

import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
} from "@/components/ui/input-group"
import { useState } from "react";
import { Events } from "@/type";



export function SearchBar() {

    const [search, setSearch] = useState("");
    const [events, setEvents] = useState([]);

    const handleSearchBar = async (value: string) => {
        setSearch(value)

        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/eventsear/search?search=${encodeURIComponent(value)}`)
        const data = await res.json()
        setEvents(data)
    }
    return (
        <div>
            <InputGroup className="max-w-xs mb-9.5 border border-green-800 py-4.5">
                <InputGroupInput placeholder="Search..."
                    type="text"
                    value={search}
                    onChange={(e) => handleSearchBar(e.target.value)} />
                <InputGroupAddon>
                    <Search />
                </InputGroupAddon>
            </InputGroup>
            <div className="space-y-3">
                {events.map((event:Events) => (
                    <div key={event._id} className="border p-4 rounded-lg">

                        <h2 className="font-bold">
                            {event.title}
                        </h2>

                        <p>{event.type}</p>

                    </div>
                ))}
            </div>
        </div>
    )
}
