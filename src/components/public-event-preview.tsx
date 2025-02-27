import { faker } from '@faker-js/faker';
import { CalendarCheck, MapPin, Minus, MoveRight, Plus } from "lucide-react";
import { BackButton } from './ui/back-button';
import { useState } from 'react';
import { Button } from '@dynamic-gen/avengers-ui';

const randomNumber = Math.random()*10;

const images = [
    "https://media-api.xogrp.com/images/6f236acd-f81e-457c-95c2-8613d6dc90c9~rs_768.h",
    "https://as1.ftcdn.net/v2/jpg/08/72/38/46/1000_F_872384609_BqxXYhCAhTbG0yCgJl4mx8UnkDDLy5jy.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtVTF-3TU3LOPdM03_oEvqXPi2hH4EW0tfRg&s"
]

export function PublicEventPreview() {
    const inviteMessage = "Dear Emily, With great joy and excitement, we invite you to celebrate the union of Sarah Johnson and Michael Williams as we begin this new chapter of our lives together. Your presence will make our celebration truly special, and we can't wait to share this unforgettable day with you! Warmly, Sarah & Michael."
    
    const paymentOptions = [
        {label: "Single", price: 200000},
        {label: "Couples", price: 500000},
        {label: "Family", price: 650000},
    ]

    const [selectedPackage, setSelectedPackage] = useState<string>()
    
    return (
        <div className="space-y-4 pb-8 px-4">
            <BackButton />
            <img 
                src={randomNumber >= 5 ? images[2] : randomNumber < 3 ? images[0] : images[1]} 
                alt="wedding image"
                className="w-full h-[200px] object-cover rounded-t-lg" />

            <div className="px-4 space-y-2">
                <p className="font-bold">{faker.person.fullName()}'s Party</p>
                <p className="text-sm italic px-2">&ldquo;{inviteMessage}&rdquo;</p>
                <p className="text-sm text-center">3 days remaining</p>
                <div className="flex items-center gap-2">
                    <MapPin size={18} />
                    <p className="text-sm text-muted-foreground">Mbezi Beach, Massana Party Venue</p>
                </div>
                <div className="flex items-center gap-2">
                    <CalendarCheck size={18} />
                    <p className="text-sm text-muted-foreground">{new Date().toDateString()}, 5pm - 11pm</p>
                </div>
                <br />
                <p className="text-xs font-semibold text-muted-foreground">Ticket Packages</p>
                <div className='flex flex-col gap-2'>
                    {paymentOptions?.map(pkg => {
                        return (
                            <div onClick={() => setSelectedPackage(pkg?.label)} className="flex cursor-pointer items-center gap-2 p-4 border-b">
                                <div className='size-4 border border-primary rounded-full grid place-content-center'>
                                    {selectedPackage === pkg?.label && <div className='size-2 bg-primary rounded-full'/>}
                                </div>
                                <p className='text-sm font-black'>{pkg?.label}</p>
                                <div className='ml-auto'/>
                                <p className='text-sm'>{pkg?.price?.toLocaleString()} TZS</p>
                            </div>
                        )
                    })}
                </div>
                <br />
                <Counter title='Quantity' />
                <br />
                <Button className='w-full'>Pay Now <MoveRight /></Button>
                <br />
                <br />
            </div>
        </div>
    )
}

function Counter(props: {title?: string}) {
    const [count, setCount] = useState(1)
    return (
        <div className='flex flex-col items-center gap-2'>
            <small className='text-center'>{props?.title}</small>
            <div className='flex items-center justify-center gap-4'>
                <Button variant={"outline"} disabled={count <= 1} onClick={() => setCount(c => c -1)} size={"icon"}><Minus /></Button>
                <div className='w-[80px] bg-primary/10 p-2 border text-4xl font-black text-center rounded-lg'>
                    {count}
                </div>
                <Button variant={"outline"} onClick={() => setCount(c => c +1)} size={"icon"}><Plus /></Button>
            </div>
        </div>
    )
}