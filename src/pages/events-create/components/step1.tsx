import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
    Button,
    Calendar,
    DatePicker,
    Input,
    Label,
    MultiSelect,
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger
} from "@dynamic-gen/avengers-ui";
import { Car, Check, CheckCircle, Dot, Heart, House, Info, MoveRight, Music, Plus, Search, Star } from "lucide-react";
import { useState } from "react";
import { CarouselImages } from "../../../components/carousel-images.tsx";
import { MutedParagraph } from "../../../components/ui/muted-paragraph.tsx";
import { Paragraph } from "../../../components/ui/paragraph.tsx";
import { Title } from "../../../components/ui/title.tsx";
import { StepType } from "../index.tsx";

export const serviceProviders = [
    {
        name: "Ornella Binni",
        profile: "https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80",
        rating: (3 + Math.min(2, Math.floor(Math.random() * 10))),
        location: {
            region: "Dar es Salaam",
            district: "Ubungo",
            street: "Mbezi Luis"
        },
        category: "Transport"
    },
    {
        name: "Tom Byrom",
        profile: "https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80",
        rating: (3 + Math.min(2, Math.floor(Math.random() * 10))),
        location: {
            region: "Dar es Salaam",
            district: "Ubungo",
            street: "Mbezi Luis"
        },
        category: "Transport"
    },
    {
        name: "Vladimir Malyavko",
        profile: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
        rating: (3 + Math.min(2, Math.floor(Math.random() * 10))),
        location: {
            region: "Dar es Salaam",
            district: "Ubungo",
            street: "Mbezi Luis"
        },
        category: "Transport"
    },
    {
        name: "Ornella2 Binni2",
        profile: "https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80",
        rating: (3 + Math.min(2, Math.floor(Math.random() * 10))),
        location: {
            region: "Dar es Salaam",
            district: "Ubungo",
            street: "Mbezi Luis"
        },
        category: "Transport"
    },
    {
        name: "Tom2 Byrom2",
        profile: "https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80",
        rating: (3 + Math.min(2, Math.floor(Math.random() * 10))),
        location: {
            region: "Dar es Salaam",
            district: "Ubungo",
            street: "Mbezi Luis"
        },
        category: "Transport"
    },
    {
        name: "Vladimir2 Malyavko2",
        profile: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
        rating: (3 + Math.min(2, Math.floor(Math.random() * 10))),
        location: {
            region: "Dar es Salaam",
            district: "Ubungo",
            street: "Mbezi Luis"
        },
        category: "Transport"
    },
]

export function StepOne(props: { onChangeStep: (step: StepType) => void }) {
    const selectedEvent = "wedding";
    const eventFeaturesList = [
        {
            value: "dj",
            label: "DJ",
            icon: Music,
            amount: 2000000,
            priceRanges: [500000, 1000000, 2000000, 3000000, 4000000],
        },
        {
            value: "transport",
            label: "Transport",
            icon: Car,
            amount: 3000000,
            priceRanges: [700000, 1000000, 2000000, 3000000, 4000000],
        },
        {
            value: "venue",
            label: "Venue",
            icon: House,
            amount: 1000000,
            priceRanges: [1000000, 2000000, 3000000, 4000000],
        },
    ];
    const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);

    const countries = [{label: "Tanzania", value: "TZ"}];
    const regions = [{label: "Dar es Salaam", value: "dsm"}];
    const districts = [{label: "Kinondoni", value: "kinondoni"}];

    return (
        <div className="flex flex-col gap-6">
            <Paragraph className="text-sm">
                Please fill in all required fields so that we can get the best venues
                for your day
            </Paragraph>

            <hr/>

            <div className="flex flex-col gap-2">
                <Label>Country</Label>
                <Select defaultValue="TZ" disabled>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select ..."/>
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Countries</SelectLabel>
                            {countries?.map((dt) => (
                                <SelectItem value={dt?.value}>{dt?.label}</SelectItem>
                            ))}
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>

            <div className="flex flex-col gap-2">
                <Label>Region</Label>
                <Select>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="..."/>
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Regions</SelectLabel>
                            {regions?.map((dt) => (
                                <SelectItem value={dt?.value}>{dt?.label}</SelectItem>
                            ))}
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>

            <div className="flex flex-col gap-2">
                <Label>District</Label>
                <Select>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="..."/>
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Districts</SelectLabel>
                            {districts?.map((dt) => (
                                <SelectItem value={dt?.value}>{dt?.label}</SelectItem>
                            ))}
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>

            <div className="flex flex-col gap-2">
                <Label>Event name</Label>
                <Input placeholder="Event name ..." />
            </div>

            <div className="flex flex-col gap-2">
                <Label>Privacy</Label>
                <div className="flex flex-col gap-0">
                    {[
                        {label: "Public", value: "public"},
                        {label: "Private", value: "private"}
                    ].map((dt) => (
                        <div
                            key={dt.value}
                            className="flex items-center gap-2 border-b p-3 bg-accent/20 rounded-md"
                        >
                            <div
                                className="size-5 grid place-content-center border border-primary rounded-full bg-background">
                                {"private" === dt.value && <Check size={12}/>}
                            </div>
                            <p className="text-sm">{dt.label}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <Label>Date of event</Label>
                <DatePicker/>
            </div>

            <div className="flex flex-col gap-2">
                <Label>Event type</Label>
                <div className="flex flex-col gap-0">
                    {[
                        {label: "Wedding", value: "wedding"},
                        {label: "Graduation", value: "graduation"},
                        {label: "Other", value: "other"},
                    ].map((dt) => (
                        <div
                            key={dt.value}
                            className="flex items-center gap-2 border-b p-3 bg-accent/20 rounded-md"
                        >
                            <div
                                className="size-5 grid place-content-center border border-primary rounded-full bg-background">
                                {selectedEvent === dt.value && <Check size={12}/>}
                            </div>
                            <p className="text-sm">{dt.label}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <Label>Budget</Label>
                <Input type="tel" placeholder="eg, 20,000,000"/>
            </div>

            <div className="flex flex-col gap-2">
                <Label>Event Features</Label>

                <MultiSelect
                    options={eventFeaturesList}
                    onValueChange={setSelectedFeatures}
                    defaultValue={selectedFeatures}
                    placeholder="Select features"
                    variant="secondary"
                    animation={0}
                    maxCount={undefined}
                />

                {selectedFeatures?.length ? (
                    <div className="">
                        <div className="flex flex-col gap-4 mt-2 -mx-2">
                            {selectedFeatures.map((feature) => {
                                const target = eventFeaturesList?.find(
                                    (dt) => dt.value === feature
                                );
                                return (
                                    <div
                                        key={feature}
                                        className="flex flex-col gap-2 justify-between"
                                    >
                                        <Paragraph className="text-sm bg-accent/20 ml-4 text-muted-foreground p-2 font-semibold">{target?.label}</Paragraph>

                                        <div
                                            className="whitespace-nowrap rounded-md overflow-x-auto flex flex-row gap-4 -mx-2 pb-2 pl-4"
                                        >
                                            <Sheet>
                                                <SheetTrigger>
                                                    <div
                                                        className={"h-full w-28 bg-red-50 flex flex-col gap-1 items-center justify-center border rounded-md"}
                                                    >
                                                        <Search size={17} />
                                                    </div>
                                                </SheetTrigger>
                                                <SheetContent
                                                    side={"bottom"}
                                                    className="h-[80vh] overflow-y-auto flex flex-col gap-4"
                                                >
                                                    <SheetHeader>
                                                        <SheetTitle className="text-start">Request service Provider</SheetTitle>
                                                        <SheetDescription className="text-start">
                                                            Search for a service provider of your choice and match your event calendars
                                                        </SheetDescription>
                                                    </SheetHeader>
                                                    <Input Icon={<Search size={16} />} placeholder="Enter provider name" />
                                                    <div className="flex flex-col gap-0">
                                                        {
                                                            serviceProviders?.map((provider) => (
                                                                <Accordion type="single" collapsible>
                                                                    <AccordionItem value={provider?.name}>
                                                                        <AccordionTrigger>
                                                                            <div className="flex items-center gap-2">
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
                                                </SheetContent>
                                            </Sheet>
                                            {
                                                serviceProviders
                                                    .map(serviceProvider => (
                                                        <Sheet key={serviceProvider?.name}>
                                                            <SheetTrigger>
                                                                <div
                                                                    className={"flex flex-col gap-1 items-center rounded-md py-2 px-4"}>
                                                                    <div
                                                                        className="size-16 roundef-full border-4 border-white">
                                                                        <img src={serviceProvider?.profile} alt=""
                                                                             className="w-full h-full object-cover rounded-full"/>
                                                                    </div>
                                                                    <MutedParagraph className={"text-sm"}>{serviceProvider?.name}</MutedParagraph>
                                                                    <div className={"flex items-center gap-1"}>
                                                                        {Array.from({length: 5}, (_, index) => (
                                                                            <Star
                                                                                size={14}
                                                                                fill={index > (serviceProvider?.rating - 1) ? "white" : "#212121"}
                                                                            />
                                                                        ))}
                                                                    </div>
                                                                </div>
                                                            </SheetTrigger>

                                                            <SheetContent
                                                                side={"bottom"}
                                                                className="h-[80vh] overflow-y-auto flex flex-col gap-4"
                                                            >
                                                                <SheetHeader>
                                                                    <SheetTitle
                                                                        className="text-start"></SheetTitle>
                                                                    <SheetDescription className="text-start">

                                                                    </SheetDescription>
                                                                </SheetHeader>

                                                                <div className={"flex flex-col gap-1 items-center"}>
                                                                        <div
                                                                            className="size-24 rounded-full">
                                                                            <img src={serviceProvider?.profile} alt=""
                                                                                 className="w-full h-full border-4 border-white shadow-lg object-cover rounded-full"/>
                                                                        </div>
                                                                        <Title
                                                                            level={"h1"}>{serviceProvider?.name}</Title>
                                                                    </div>

                                                                    <div className="grid grid-cols-3 gap-4">
                                                                        {
                                                                            [
                                                                                {label: "Category", value: target?.label},
                                                                                {label: "Rating", value: serviceProvider?.rating, kind: "rating"},
                                                                                {
                                                                                    label: "Price",
                                                                                    value: 2500000,
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

                                                                    <Button>Book for Event <CheckCircle /></Button>

                                                                    <Title level={"h4"}>Comments</Title>

                                                                    <div className="flex flex-col gap-0">
                                                                        {
                                                                            Array.from({length: 5}).map(() => (
                                                                                <div className="grid grid-cols-[56px_1fr] gap-2 border-b pt-4 pb-3">
                                                                                    <div className="size-14 flex rounded-full border bg-red-300">
                                                                                        <img src={serviceProvider?.profile} alt=""
                                                                                            className="w-full h-full object-cover border-4 border-white shadow-sm rounded-full"/>
                                                                                    </div>
                                                                                    <div className="flex flex-col gap-1">
                                                                                        <Paragraph className={"font-bold text-sm"}>PSK.net <span className="text-blue-400 font-normal">@code-kings</span></Paragraph>
                                                                                        <Paragraph className={"text-sm text-gray-600"}>Just did my event with them, highly recommend them 🔥🔥🔥🔥</Paragraph>
                                                                                        <div className="flex items-center gap-0">
                                                                                            <Paragraph className={"text-xs text-gray-500"}>Mar 14</Paragraph>
                                                                                            <Dot />
                                                                                            <div className="flex items-center gap-1">
                                                                                                <Heart size={14} fill="#212121" />
                                                                                                <Paragraph className={"text-xs text-gray-500"}>767</Paragraph>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            ))
                                                                        }
                                                                    </div>
                                                            </SheetContent>
                                                        </Sheet>
                                                    ))
                                            }
                                        </div>
                                    </div>
                                );
                            })}
                            <div className="flex gap-2 flex-col items-center my-8">
                                <Paragraph className="text-sm font-normal text-muted-foreground">Total</Paragraph>
                                <Paragraph className="text-4xl font-black">
                                    6,000,000
                                </Paragraph>
                            </div>
                        </div>
                    </div>
                ) : null}
            </div>

            <Button onClick={() => props?.onChangeStep(2)}>
                <Paragraph className="text-sm">Proceed</Paragraph>
                <MoveRight/>
            </Button>
        </div>
    );
}