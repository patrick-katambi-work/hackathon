import { Badge, Button, Calendar } from "@dynamic-gen/avengers-ui"
import { CheckCircle, Heart, Star, X } from "lucide-react"
import { useState } from "react"
import { CreateFormData, serviceProviders } from "../pages/events-create/components/step1"
import { CarouselImages } from "./carousel-images"
import { MutedParagraph } from "./ui/muted-paragraph"
import { Paragraph } from "./ui/paragraph"
import { Title } from "./ui/title"

export function ProviderProfile({serviceProvider, showCalendar, onChangeFormData, isSelected} : {serviceProvider: typeof serviceProviders[0], showCalendar?: boolean, 
    onChangeFormData: (key: keyof CreateFormData, value?: string | boolean | Date | {
        id: string;
        name: string;
        category: string;
        package?: {
            id?: string;
            price?: string;
        };
    }) => void,
    isSelected?: boolean
}) {
    const [selectedPackage, setSelectedPackage] = useState<{id: string, price: string}>()
    return (
        <div className="flex flex-col gap-8">
            <div className={"flex flex-col gap-1 items-center text-center"}>
                <div
                    className="size-24 rounded-full">
                    <img src={serviceProvider?.profile} alt=""
                            className="w-full h-full border-4 border-white shadow-lg object-cover rounded-full"/>
                </div>
                <Title level={"h1"}>{serviceProvider?.name}</Title>
                <div className="flex items-center gap-1">
                    <Heart size={14} fill="#212121" />
                    <Paragraph className={"text-xs text-gray-500"}>767 Likes</Paragraph>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
                {
                    [
                        {label: "Category", value: serviceProvider?.category},
                        {label: "Rating", value: serviceProvider?.rating, kind: "rating"},
                        {label: "Region", value: serviceProvider?.location?.region},
                        {label: "District", value: serviceProvider?.location?.district},
                        {label: "Street", value: serviceProvider?.location?.street},
                    ].map(dt => {
                        if (dt?.kind === "rating") {
                            return (
                                <div className={"flex flex-col items-center gap-3"}>
                                    <MutedParagraph className="text-xs">{dt?.label}</MutedParagraph>
                                        <div className={"flex items-center gap-1 -mt-1"}>
                                            {Array.from({length: 5}, (_, index) => (
                                                <Star
                                                    size={12}
                                                    fill={index > (serviceProvider?.rating - 1) ? "white" : "#212121"}
                                                />
                                            ))}
                                        </div>
                                </div>
                            )
                        }

                        if (dt?.kind === "money") {
                            return (
                                <div
                                    key={dt?.label}
                                    className={"flex flex-col items-center gap-1"}
                                >
                                    <MutedParagraph className="text-xs">{dt?.label}</MutedParagraph>
                                    <Paragraph
                                        className={"text-center font-semibold text-xs"}>{Number(dt?.value)?.toLocaleString()}</Paragraph>
                                </div>
                            )
                        }

                        return (
                            <div
                                key={dt?.label}
                                className={"flex flex-col items-center gap-1"}
                            >
                                <MutedParagraph className="text-xs">{dt?.label}</MutedParagraph>
                                <Paragraph
                                    className={"text-center font-semibold text-xs"}>{dt?.value}</Paragraph>
                            </div>
                        )
                    })
                }
            </div>

            <div className="text-center flex flex-col gap-2">
                <Title level="h4">Packages</Title>
                <div className="flex flex-col gap-2">
                    {
                        [
                            {label: "Family", value: 200000, features: ["MC", "Music"], description: "Some description"},
                            {label: "Professional", value: 200000, features: ["MC", "Music", "Online Photoshoot", "Bridal maids", ], description: "Some other description"},
                        ].map(dt => {
                            const isSelected = selectedPackage?.id === dt?.label;
                            return (
                                <div className="border rounded-lg w-full p-4 cursor-pointer" onClick={() => setSelectedPackage({id: dt?.label, price: dt?.value?.toString()})}>
                                    <div className="grid grid-cols-10 gap-2 items-start">
                                        <div className="size-5 rounded-full border border-primary grid place-content-center">
                                            <div style={{display: isSelected ? "block" : 'none'}} className="size-3 bg-primary rounded-full"></div>
                                        </div>
                                        <div className="flex flex-col items-start gap-2 justify-between w-full col-span-7">
                                            <p className="font-black">{dt?.label}</p>
                                            <p className="text-xs text-muted-foreground">{dt?.description}</p>
                                        </div>
                                        <p className="col-span-2 text-sm font-semibold text-right">{dt?.value?.toLocaleString()}</p>
                                        <div></div>
                                        <div className="col-span-9 flex items-center gap-x-4 gap-y-2 flex-wrap">
                                            {dt?.features?.map(feat => (
                                                <Badge variant={"default"} className="w-fit uppercase bg-red-200 hover:bg-red-200 text-red-700 hover:text-red-700">
                                                    <small>{feat}</small>
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <div className="text-center flex flex-col gap-2">
                <Title level="h4">Gallery</Title>
                <CarouselImages />
            </div>

            <div style={{display: showCalendar ? "block" : "none"}} className="space-y-2">
                <p className="text-sm">Here is when <strong>{serviceProvider?.name}</strong> becomes available</p>
                <Calendar
                    mode="multiple"
                    selected={[
                            new Date(), 
                            (() => {
                                const today = new Date();
                                const tomorrow = new Date();
                                tomorrow.setDate(today.getDate() + 1);
                                return tomorrow;
                            })(), 
                            (() => {
                                const today = new Date();
                                const tomorrow = new Date();
                                tomorrow.setDate(today.getDate() + 3);
                                return tomorrow;
                            })(), 
                            (() => {
                                const today = new Date();
                                const tomorrow = new Date();
                                tomorrow.setDate(today.getDate() + 4);
                                return tomorrow;
                            })()
                        ]
                    }
                />
            </div>

            <Button 
                onClick={() => onChangeFormData?.("features", {id: serviceProvider?.name, name: serviceProvider?.name, category: serviceProvider?.category, package: {id: selectedPackage?.id, price: selectedPackage?.price}})}
                variant={isSelected ? "secondary" : "default"}
            >
                {isSelected && <X />}
                {isSelected ? "Cancel Selection" : "Book for Service"} 
                {!isSelected && <CheckCircle />}
            </Button>
        </div>
    )
}