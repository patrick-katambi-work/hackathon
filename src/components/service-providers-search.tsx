import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
    DatePicker,
    Input,
    Label
} from "@dynamic-gen/avengers-ui";
import { Info, Search, Star } from "lucide-react";
import { useNavigate } from "react-router";
import ROUTE_NAMES from "../config/router/route-names";
import { serviceProviders } from "../pages/events-create/components/step1";
import { AvailableDatesCalendar } from "./available-dates-calendar";

export function ServiceProvidersSearch(props: {isCreateStep?: boolean}) {
    const navigate = useNavigate();
    const onClick = () => navigate(ROUTE_NAMES.EVENTS_EXPLORE_PROFILE)

    if(!props?.isCreateStep) {
        return (
            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-0">
                    {
                        serviceProviders?.map((provider) => (
                            <div onClick={onClick} className="flex items-center gap-2 cursor-pointer p-4 border-b">
                                <div className="size-14 bg-red-200 rounded-full">
                                    <img src={provider?.profile} alt=""
                                            className="w-full h-full object-cover rounded-full"/>
                                </div>
                                <div className="flex flex-col gap-0.5">
                                    <p className="text-xs">{provider?.name}</p>
                                    <div className="flex items-center gap-2">
                                        <p className="text-xs text-blue-400">{provider?.category},</p>
                                        <div className={"flex items-center gap-1"}>
                                            {Array.from({length: 5}, (_, index) => (
                                                <Star
                                                    size={12}
                                                    fill={index > (provider?.rating - 1) ? "white" : "#212121"}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                    <p className="text-xs text-gray-500">{provider?.location?.region}, {provider?.location?.district}, {provider?.location?.street}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }

    return (
        <div className="space-y-4">
            <Input Icon={<Search size={16} />} placeholder="Enter provider name" />
            <div className="flex flex-col gap-0">
                {
                    serviceProviders?.map((provider) => (
                        <Accordion type="single" collapsible>
                            <AccordionItem value={provider?.name}>
                                <AccordionTrigger>
                                    <div className="flex items-center gap-2 cursor-pointer">
                                        <div className="size-14 bg-red-200 rounded-full">
                                            <img src={provider?.profile} alt=""
                                                    className="w-full h-full object-cover rounded-full"/>
                                        </div>
                                        <div className="flex flex-col gap-0.5">
                                            <p className="text-xs">{provider?.name}</p>
                                            <div className="flex items-center gap-2">
                                                <p className="text-xs text-blue-400">{provider?.category},</p>
                                                <div className={"flex items-center gap-1"}>
                                                    {Array.from({length: 5}, (_, index) => (
                                                        <Star
                                                            size={12}
                                                            fill={index > (provider?.rating - 1) ? "white" : "#212121"}
                                                        />
                                                    ))}
                                                </div>
                                            </div>
                                            <p className="text-xs text-gray-500">{provider?.location?.region}, {provider?.location?.district}, {provider?.location?.street}</p>
                                        </div>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className="flex flex-col gap-2">
                                    <div className="flex items-start gap-1 text-red-500">
                                        <Info size={15} />
                                        <p className="text-xs">{provider?.name} is not available on {new Date().toDateString()}</p>
                                    </div>
                                    
                                    <p className="text-xs">Here is when {provider?.name} becomes available</p>
                                    <AvailableDatesCalendar />
                                    <fieldset className="flex flex-col gap-1">
                                        <Label className="text-xs text-gray-600">Change Event Date</Label>
                                        <DatePicker />
                                    </fieldset>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    ))
                }
            </div>
        </div>
    )
}