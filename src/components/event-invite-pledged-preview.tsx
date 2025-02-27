import { Button, Input, Label, RadioGroup, RadioGroupItem } from '@dynamic-gen/avengers-ui';
import { faker } from '@faker-js/faker';
import { CalendarCheck, CheckCircle, MapPin, MoveRight } from "lucide-react";
import { pledgers } from "../pages/events-preview/components/view-pledges";
import { BackButton } from './ui/back-button';
import { useState } from 'react';

const images = [
    "https://media-api.xogrp.com/images/6f236acd-f81e-457c-95c2-8613d6dc90c9~rs_768.h",
    "https://as1.ftcdn.net/v2/jpg/08/72/38/46/1000_F_872384609_BqxXYhCAhTbG0yCgJl4mx8UnkDDLy5jy.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtVTF-3TU3LOPdM03_oEvqXPi2hH4EW0tfRg&s"
]

export function EventinvitePledgedPreview() {
    const inviteMessage = "Dear Emily, With great joy and excitement, we invite you to celebrate the union of Sarah Johnson and Michael Williams as we begin this new chapter of our lives together. Your presence will make our celebration truly special, and we can't wait to share this unforgettable day with you! Warmly, Sarah & Michael."
    const [selectedOption, setSelectedOption] = useState<"entire" | "custom">("entire")
    return (
        <div className="space-y-4 pb-8 px-4">
            <BackButton />
            <img 
                src={Math.random()*10 >= 5 ? images[2] : Math.random()*10 < 3 ? images[0] : images[1]} 
                alt="wedding image"
                className="w-full h-[200px] object-cover rounded-t-lg" />

            <div className="px-4 space-y-4">
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
                <div className="items-center flex gap-2 text-muted-foreground w-fit text-xs pt-2">
                    <CheckCircle size={14} />
                    <p>Invited</p>
                </div>
                <div className="space-y-1">
                    <p className="text-xs text-muted-foreground text-center">Pledges Collected</p>
                    <p className="text-sm text-muted-foreground text-center">{(pledgers?.reduce((acc, itr) => acc + itr?.paid, 0)).toLocaleString()} / {(pledgers?.reduce((acc, itr) => acc + itr?.pledge, 0)).toLocaleString()} TZS</p>
                    <div className="h-3 border rounded-lg w-full bg-muted relative overflow-clip">
                        <div className="absolute w-[60%] h-full bg-red-500 rounded-r-full"></div>
                    </div>
                </div>
                <br />
                <div className="flex flex-col gap-3 mt-2">
                    <p className="text-xs">Pay your pledge (<strong>176,000 TZS</strong>)</p>
                    <RadioGroup className="flex items-center gap-4" value={selectedOption} onValueChange={(val) => setSelectedOption(val as never as typeof selectedOption)}>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="entire" id="entire" />
                            <Label htmlFor="entire">Entire Amount</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="custom" id="custom" />
                            <Label htmlFor="custom">Custom Amount</Label>
                        </div>
                    </RadioGroup>
                    {
                        selectedOption === "custom"
                            ? (
                                <div className="flex flex-col gap-1 items-center">
                                    <small><strong>176,000 TZS</strong> Remaining</small>
                                    <div className="grid grid-cols-5 gap-2">
                                        <Input Icon={<small className="font-bold">TZS</small>} type="tel" placeholder="eg. 200,000" className="col-span-3" />
                                        <Button className="col-span-2 border">Pay Now<MoveRight /></Button>
                                    </div>
                                </div>
                            )
                            : <Button className="border">Pay Pledge<MoveRight /></Button>
                    }
                </div>
            </div>
        </div>
    )
}