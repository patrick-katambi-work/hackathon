import {
    Button,
    DatePicker,
    Input,
    Label,
    MultiSelect,
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    Switch,
    Textarea
} from "@dynamic-gen/avengers-ui";
import { faker } from "@faker-js/faker";
import { Car, Check, House, MoveRight, Music, Search, Star } from "lucide-react";
import { useState } from "react";
import { ProviderProfile } from "../../../components/provider-profile.tsx";
import { ServiceProvidersSearch } from "../../../components/service-providers-search.tsx";
import { MutedParagraph } from "../../../components/ui/muted-paragraph.tsx";
import { Paragraph } from "../../../components/ui/paragraph.tsx";
import { StepType } from "../index.tsx";

export const serviceProviders = [
    {
        name: faker.person.fullName(),
        profile: "https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80",
        rating: (3 + Math.min(2, Math.floor(Math.random() * 10))),
        location: {
            region: "Dar es Salaam",
            district: "Ubungo",
            street: "Mbezi Luis"
        },
        category: "Transport",
        price: (Math.random() * 10000000).toFixed(0)
    },
    {
        name: faker.person.fullName(),
        profile: "https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80",
        rating: (3 + Math.min(2, Math.floor(Math.random() * 10))),
        location: {
            region: "Dar es Salaam",
            district: "Ubungo",
            street: "Mbezi Luis"
        },
        category: "Venue",
        price: (Math.random() * 10000000).toFixed(0)
    },
    {
        name: faker.person.fullName(),
        profile: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
        rating: (3 + Math.min(2, Math.floor(Math.random() * 10))),
        location: {
            region: "Dar es Salaam",
            district: "Ubungo",
            street: "Mbezi Luis"
        },
        category: "Music",
        price: (Math.random() * 10000000).toFixed(0)
    },
    {
        name: faker.person.fullName(),
        profile: "https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80",
        rating: (3 + Math.min(2, Math.floor(Math.random() * 10))),
        location: {
            region: "Dar es Salaam",
            district: "Ubungo",
            street: "Mbezi Luis"
        },
        category: "Caterer",
        price: (Math.random() * 10000000).toFixed(0)
    },
    {
        name: faker.person.fullName(),
        profile: "https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80",
        rating: (3 + Math.min(2, Math.floor(Math.random() * 10))),
        location: {
            region: "Dar es Salaam",
            district: "Ubungo",
            street: "Mbezi Luis"
        },
        category: "Entertainment",
        price: (Math.random() * 10000000).toFixed(0)
    },
    {
        name: faker.person.fullName(),
        profile: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
        rating: (3 + Math.min(2, Math.floor(Math.random() * 10))),
        location: {
            region: "Dar es Salaam",
            district: "Ubungo",
            street: "Mbezi Luis"
        },
        category: "MC",
        price: (Math.random() * 10000000).toFixed(0)
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

    return (
        <div className="flex flex-col gap-6">
            <Paragraph className="text-sm">
                Please fill in all required fields so that we can get the best venues
                for your day
            </Paragraph>

            <hr/>

            <div className="flex flex-col gap-2">
                <Label>Event name</Label>
                <Input placeholder="Event name ..." />
            </div>

            <div className="flex flex-col gap-2">
                <Label>Location</Label>
                <Input placeholder="Enter location ..." />
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
                <Label>Greeting message</Label>
                <Textarea rows={10} placeholder="eg. With great joy and excitement, we invite you to celebrate the union of Sarah Johnson and Michael Williams" className="text-sm" />
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
                                                    className="h-[90vh] overflow-y-auto flex flex-col gap-4 rounded-t-xl"
                                                >
                                                    <SheetHeader>
                                                        <SheetTitle className="text-start">Request service Provider</SheetTitle>
                                                        <SheetDescription className="text-start">
                                                            Search for a service provider of your choice and match your event calendars
                                                        </SheetDescription>
                                                    </SheetHeader>
                                                    <ServiceProvidersSearch isCreateStep />
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
                                                                className="h-[90vh] overflow-y-auto flex flex-col gap-4 rounded-t-xl"
                                                            >
                                                                <SheetHeader>
                                                                    <SheetTitle
                                                                        className="text-start"></SheetTitle>
                                                                    <SheetDescription className="text-start">

                                                                    </SheetDescription>
                                                                </SheetHeader>

                                                                <ProviderProfile serviceProvider={serviceProvider} />
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

            <div className="flex flex-col gap-2">
                <Label>Payment</Label>
                <div className="flex items-center gap-4 justify-between text-sm">
                    <p>Use Changisha</p>
                    <Switch checked />
                </div>
            </div>

            <Button onClick={() => props?.onChangeStep(2)}>
                <Paragraph className="text-sm">Create Event</Paragraph>
                <MoveRight/>
            </Button>
        </div>
    );
}