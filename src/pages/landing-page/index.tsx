import { Button, Input } from "@dynamic-gen/avengers-ui";
import { faker } from "@faker-js/faker";
import { MapPin, MoveRight, Plus, Search, TicketCheck } from "lucide-react";
import { useNavigate } from "react-router";
import profileImage from "../../assets/profile.jpg";
import { Title } from "../../components/ui/title.tsx";
import ROUTE_NAMES from "../../config/router/route-names.ts";
import { serviceProviders } from "../events-create/components/step1.tsx";
import { useLandingPage } from "./use-landing-page.tsx";

export function LandingPage() {
    const {data} = useLandingPage();
    const navigate = useNavigate();
    const onClick = () => navigate(ROUTE_NAMES.EVENTS_EXPLORE);
    return (
        <div className={"flex flex-col gap-4 px-4"}>
            <div className="flex items-center gap-2">
                <img src={profileImage} alt="profile" className="size-12 rounded-full border-4 border-white shadow-md" />
                <Title level="h4"><span className={"font-normal"}>Hello,</span> {data?.user?.name}</Title>
            </div>

            <div className="grid grid-cols-2 gap-4 justify-end">
                <div className="w-full p-4 rounded-lg border flex flex-col gap-2 items-center bg-blue-50">
                    <TicketCheck />
                    <p className="text-sm text-center">My Tickets</p>
                </div>
                <div onClick={() => navigate(ROUTE_NAMES.EVENTS_CREATE)} className="w-full p-4 cursor-pointer gap-2 rounded-lg border flex flex-col items-center bg-red-100">
                    <Plus />
                    <p className="text-sm text-center">Create Event</p>
                </div>
            </div>

            <Input onClick={onClick} Icon={<Search size={16} />}  placeholder="Search for providers and events" className="cursor-pointer"/>

            <FeaturedProviders />
            <FeaturedEvents />
            <UpcomingEvents />
            <br/>
        </div>
    )
}

function FeaturedProviders() {
    const providers = serviceProviders;
    return (
        <div className="flex flex-col gap-2">
            <div className="flex items-center gap-4 justify-between">
                <p className="text-muted-foreground text-sm">Featured Providers</p>
                <Button size={"default"} variant={"link"}>Seel all <MoveRight /></Button>
            </div>
            <div className="-mx-4 pl-4 flex items-center gap-4 overflow-x-auto">
                {
                    providers?.map(provider => (
                        <div className="flex flex-col gap-1 items-center pb-2 cursor-pointer">
                            <div className="h-16 w-24 grid place-content-center">
                                <img src={provider?.profile} alt="profile" className="size-16 rounded-full border-4 border-white shadow-md" />
                            </div>
                            <small className="text-center font-bold line-clamp-1">{provider?.name}</small>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

function FeaturedEvents() {
    const providers = serviceProviders;
    const navigate = useNavigate();
    const onClick = (name: string) => navigate(`${ROUTE_NAMES.EVENTS}/${name}/public`)
    return (
        <div className="flex flex-col gap-2">
            <div className="flex items-center gap-4 justify-between">
                <p className="text-muted-foreground text-sm">Featured Events</p>
                <Button size={"default"} variant={"link"}>Seel all <MoveRight /></Button>
            </div>
            <div className="-mx-4 pl-4 flex items-center gap-4 overflow-x-auto">
                {
                    providers?.map(provider => (
                        <div onClick={() => onClick(provider?.name)} className="flex flex-col gap-1 items-center pb-2 cursor-pointer">
                            <div className="h-[200px] w-[85vw] grid place-content-center rounded-md relative">
                                <div className="absolute top-2 left-2">
                                    <p className="text-center font-semibold text-xs line-clamp-1 bg-gray-400 py-0.5 px-2 rounded-md text-white">{new Date().toDateString()}</p>
                                </div>
                                <img src={provider?.profile} alt="profile" className="h-[200px] w-[85vw] object-cover rounded-md" />
                                <div className="absolute bottom-2 left-2">
                                    <p className="text-center font-semibold line-clamp-1 bg-gray-800 px-2 rounded-md text-white">{provider?.name}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export function UpcomingEvents(props: {hideTitle?: boolean}) {
    const providers = serviceProviders;
    const navigate = useNavigate();
    const onClick = (name: string) => navigate(`${ROUTE_NAMES.EVENTS}/${name}/public`)
    return (
        <div className="flex flex-col gap-2">
            <div style={{display: props?.hideTitle ? "none" : "flex"}} className="items-center gap-4 justify-between">
                <p className="text-muted-foreground text-sm">Upcoming Public Events</p>
                <Button size={"default"} variant={"link"}>Seel all <MoveRight /></Button>
            </div>
            <div className="-mx-4 pl-4 grid grid-cols-2 gap-4 px-2">
                {
                    providers?.map(provider => (
                        <div onClick={() => onClick(provider?.name)} className="flex flex-col gap-0 items-start pb-2 cursor-pointer rounded-lg bg-muted/80 border">
                            <div className="w-full h-fit bg-red-200">
                                <img src={provider?.profile} alt="profile" className=" w-full h-[100px] object-cover rounded-md rounded-b-none" />
                            </div>
                            <div className="space-y-1 p-2">
                                <p className="text-xs">{faker.date.future()?.toDateString()}</p>
                                <p className="text-base font-semibold line-clamp-1">{provider?.name}</p>
                                <div className="flex items-center gap-1">
                                    <MapPin size={14} />
                                    <p className="text-xs line-clamp-1">{provider?.location.region}, {provider?.location.district}, {provider?.location.street}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}