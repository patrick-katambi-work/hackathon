import { Button, Calendar } from "@dynamic-gen/avengers-ui"
import { CheckCircle, Heart, Star } from "lucide-react"
import { serviceProviders } from "../pages/events-create/components/step1"
import { CarouselImages } from "./carousel-images"
import { MutedParagraph } from "./ui/muted-paragraph"
import { Paragraph } from "./ui/paragraph"
import { Title } from "./ui/title"

export function ProviderProfile({serviceProvider, showCalendar} : {serviceProvider: typeof serviceProviders[0], showCalendar?: boolean}) {
    return (
        <div className="flex flex-col gap-8">
            <div className={"flex flex-col gap-1 items-center"}>
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
                        {
                            label: "Price",
                            value: serviceProvider.price,
                            kind: "money"
                        },
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
                                        className={"text-center font-semibold text-xs"}>{dt?.value?.toLocaleString()}</Paragraph>
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

            <CarouselImages />

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

            <Button>Book for Event <CheckCircle /></Button>
        </div>
    )
}