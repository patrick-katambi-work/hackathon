import { faker } from '@faker-js/faker';
import { CalendarCheck, CheckCircle, MapPin } from "lucide-react";
import { ShareInvite } from "../pages/events-preview/components/share-invite";
import { pledgers, ViewPledges } from "../pages/events-preview/components/view-pledges";
import { EventServiceProviders } from '../pages/events-preview/components/providers';

const images = [
    "https://media-api.xogrp.com/images/6f236acd-f81e-457c-95c2-8613d6dc90c9~rs_768.h",
    "https://as1.ftcdn.net/v2/jpg/08/72/38/46/1000_F_872384609_BqxXYhCAhTbG0yCgJl4mx8UnkDDLy5jy.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtVTF-3TU3LOPdM03_oEvqXPi2hH4EW0tfRg&s"
]

export function EventPreview({isPublic, isOwner, isinvited}: {isPublic?: boolean, isOwner?: boolean, isinvited?: boolean, alreadyPledged?: boolean}) {
    const inviteMessage = "Dear Emily, With great joy and excitement, we invite you to celebrate the union of Sarah Johnson and Michael Williams as we begin this new chapter of our lives together. Your presence will make our celebration truly special, and we can't wait to share this unforgettable day with you! Warmly, Sarah & Michael."
    return (
        <div className="space-y-4 pb-8">
            <img 
                src={Math.random()*10 >= 5 ? images[2] : Math.random()*10 < 3 ? images[0] : images[1]} 
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
                <div style={{display: !isPublic ? "none" : "flex"}} className="items-center gap-2 text-muted-foreground w-fit text-xs pt-2">
                    <CheckCircle size={14} />
                    <p>Public Event</p>
                </div>
                <div style={{display: !isinvited ? "none" : "flex"}} className="items-center gap-2 text-muted-foreground w-fit text-xs pt-2">
                    <CheckCircle size={14} />
                    <p>You are invited</p>
                </div>
                <div style={{display: !isOwner ? "none" : "flex"}} className="items-center gap-2 text-muted-foreground w-fit text-xs pt-2">
                    <CheckCircle size={14} />
                    <p>Owner</p>
                </div>
                <div style={{display: isPublic ? "none" : "block"}} className="space-y-1">
                    <p className="text-xs text-muted-foreground text-center">Pledges Collected</p>
                    <p className="text-sm text-muted-foreground text-center">{(pledgers?.reduce((acc, itr) => acc + itr?.paid, 0)).toLocaleString()} / {(pledgers?.reduce((acc, itr) => acc + itr?.pledge, 0)).toLocaleString()} TZS</p>
                    <div className="h-3 border rounded-lg w-full bg-muted relative overflow-clip">
                        <div className="absolute w-[60%] h-full bg-red-500 rounded-r-full"></div>
                    </div>
                    {isOwner
                        ? (
                            <div className='space-y-4'>
                                <div className="flex items-center justify-between gap-4 pt-1">
                                    <ViewPledges />
                                    <ShareInvite />
                                </div>
                                <div className='space-y-2'>
                                    <p className="text-xs text-muted-foreground text-center">Service Providers</p>
                                    <EventServiceProviders />
                                </div>
                            </div>
                        ): null}
                </div>
            </div>
        </div>
    )
}