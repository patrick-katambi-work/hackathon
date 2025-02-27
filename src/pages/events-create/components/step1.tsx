import {
    Badge,
    Button,
    DatePicker,
    Input,
    Label,
    MultiSelect,
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    Switch,
    Textarea,
} from "@dynamic-gen/avengers-ui";
import { faker } from "@faker-js/faker";
import clsx from "clsx";
import { ArrowUp, Car, Check, House, Minus, MoveRight, Music, Plus, Search, Settings, Star } from "lucide-react";
import { useState } from "react";
import { MoonLoader } from "react-spinners";
import { ProviderProfile } from "../../../components/provider-profile.tsx";
import { ServiceProvidersSearch } from "../../../components/service-providers-search.tsx";
import { MutedParagraph } from "../../../components/ui/muted-paragraph.tsx";
import { Paragraph } from "../../../components/ui/paragraph.tsx";
import { StepType } from "../index.tsx";

export type CreateFormData = {
    name?: string;
    location?: string;
    privacy?: "public" | "private";
    greeting?: string;
    date?: Date;
    eventType?: string;
    budget?: string;
    attendees?: string;
    useChangisha?: boolean;
    changishaAccount?: string;
    createChangishaAccount?: boolean;
    features?: { id: string, name: string, category: string, package?: {id?: string; price?: string} }[];
};

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

export function StepOne(_: { onChangeStep: (step: StepType) => void }) {
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
    
    const [formData, setFormData] = useState<CreateFormData>();
    
    type onChangeFormDataKeyType = keyof CreateFormData;
    
    const onChangeFormData = (key: onChangeFormDataKeyType, value?: string | boolean | Date | { id: string, name: string, category: string, package?: {id?: string; price?: string} }) => {
        if (key  === "features") {
            const currentFeatures = formData?.features ?? [];
            const targetValue = value as { id: string, name: string, category: string, package?: {id?: string; price?: string} };
            const alreadyExists = !!currentFeatures?.filter(dt => dt?.id === targetValue?.id)?.length;

            if(alreadyExists) {
                setFormData(prev => ({...prev, features: currentFeatures?.filter(dt => dt?.id !== targetValue?.id)}))
            } else {
                setFormData(prev => ({...prev, features: [...currentFeatures, targetValue]}))
            }
            return;
        }
        
        setFormData(prev => ({...prev, [key]: value}));
    };

    const onCreateEvent = () => console.log(formData)

    const [packages, setPackages] = useState<{name: string, price: string}[]>([
        {name: "", price: ""}
    ])

    const [useAi, setUseAi] = useState(true)

    const eventTypesData = [
        {label: "Ceremony", value: "ceremony"},
        {label: "Wedding", value: "wedding"},
        {label: "Graduation", value: "graduation"},
        {label: "Other", value: "other"},
    ];

    const [loading, setLoadinng] = useState(false)
    const onClickgenerate = () => {
        setLoadinng(true)
        setTimeout(() => {
            setLoadinng(false)
        }, 5000);
    }

    return (
        <div className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-2 justify-end">
                <div onClick={() => setUseAi(true)} className="w-full rounded-lg border flex flex-col gap-2 px-4 py-8 cursor-pointer items-center bg-blue-50">
                    <div className="size-6 border border-primary rounded-full grid place-content-center">
                        {useAi && <div className="size-4 border bg-primary rounded-full"></div>}
                    </div>
                    <p className="text-sm text-center">Use ShereheAI</p>
                </div>
                <div onClick={() => setUseAi(false)} className="w-full px-4 py-8 cursor-pointer gap-2 rounded-lg border flex flex-col items-center bg-red-100">
                    <div className="size-6 border border-primary rounded-full grid place-content-center">
                        {!useAi && <div className="size-4 border bg-primary rounded-full"></div>}
                    </div>
                    <p className="text-sm text-center">Create Manually</p>
                </div>
            </div>

            {useAi && <div>
                <div className="grid grid-cols-2 gap-2">
                    <fieldset className="space-y-1">
                        <small>Category</small>
                        <Select defaultValue="ceremony">
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="" />
                            </SelectTrigger>
                            <SelectContent>
                                {eventTypesData.map(dt => <SelectItem value={dt?.value}>{dt?.label}</SelectItem>)}
                            </SelectContent>
                        </Select>
                    </fieldset>
                    <fieldset className="space-y-1">
                        <small>Budget</small>
                        <Input defaultValue={"20,000,000"} Icon={<small className="font-black">TZS</small>} placeholder="..." />
                    </fieldset>
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button onClick={onClickgenerate} className="col-span-2"><Settings /> Generate Budget</Button>
                        </SheetTrigger>
                        <SheetContent
                            side={"bottom"}
                            className="h-[90vh] overflow-y-auto flex flex-col gap-4 rounded-t-xl"
                        >
                            <SheetHeader>
                                <SheetTitle className="text-start">AI Breakdown</SheetTitle>
                                <SheetDescription className="text-start">
                                    Here is the detailed breakdown from your <strong>20,000,000 TZS</strong> budget
                                </SheetDescription>
                            </SheetHeader>
                            {loading ? <MoonLoader size={20} /> : (
                                <div className="flex flex-col gap-4">
                                   {
                                        [
                                            {name: "DJ & MC", total: "1.5M Tsh", note: "", provider: "@Warioba", location: "Dar es Salaam"},
                                            {name: "Venue", total: "2M Tsh", note: "", provider: "@KualaLumpar", location: "Dar es Salaam"},
                                            {name: "Food", total: "3M Tsh", note: "200 x 15k", provider: "@KualaLumpar", location: "Dar es Salaam"},
                                            {name: "Beverage", total: "9M Tsh", note: "2500 x 3 x 200", provider: "@Massawe_Liquor_Mabibo_House_Of_Drinks", location: "Dar es Salaam"},
                                            {name: "Photograph", total: "1.5 Tsh", note: "", provider: "", location: "Dar es Salaam"},
                                            {name: "Cake", total: "2M Tsh", note: "", provider: "", location: "Dar es Salaam"},
                                            {name: "Transport", total: "400k Tsh", note: "2 x 200k", provider: "", location: "Dar es Salaam"},
                                            {name: "Decoration", total: "2M Tsh", note: "", provider: "", location: "Dar es Salaam"},
                                        ].map(dt => (
                                            <div className="flex flex-col gap-1">
                                                <Badge variant={"outline"} className="w-fit bg-orange-50">{dt?.name}</Badge>
                                                <div className="p-4 bg-muted/50 w-full border">
                                                    <div className="grid grid-cols-2 gap-4">
                                                        {[
                                                            {label: "Total", value: dt?.total},
                                                            {label: "Provider", value: dt?.provider},
                                                            {label: "Location", value: dt?.location},
                                                            {label: "Note", value: dt?.note},
                                                        ].map(dt2 => (
                                                            <div className="flex flex-col gap-1">
                                                                <small>{dt2?.label}</small>
                                                                <p className="text-sm font-semibold">{dt2?.value}</p>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                   }
                                   <div className="flex items-end flex-col gap-2">
                                        <textarea placeholder={"Ask ShereheAI"} className="rounded-md bg-white text-xs p-2 border h-12 w-full" />
                                        <Button size={"icon"} className="rounded-full size-8"><ArrowUp /></Button>
                                    </div>
                                </div>
                            )}
                        </SheetContent>
                    </Sheet>
                </div>
            </div>}
            {!useAi && (
                <>
                    <Paragraph className="text-sm">
                        Please fill in all required fields so that we can get the best venues
                        for your day
                    </Paragraph>

                    <hr/>

                    <div className="flex flex-col gap-2">
                        <Label>Event name</Label>
                        <Input placeholder="Event name ..." value={formData?.name} onChange={e => onChangeFormData("name", e?.target?.value)} />
                    </div>

                    <div className="flex flex-col gap-2">
                        <Label>Location</Label>
                        <Input placeholder="Enter location ..." value={formData?.location} onChange={e => onChangeFormData("location", e?.target?.value)} />
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
                                    onClick={() => onChangeFormData("privacy", dt?.value)}
                                    className="flex items-center gap-2 border-b p-3 bg-accent/20 rounded-md cursor-pointer"
                                >
                                    <div
                                        className="size-5 grid place-content-center border border-primary rounded-full bg-background">
                                        {formData?.privacy === dt.value && <Check size={12}/>}
                                    </div>
                                    <p className="text-sm">{dt.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div style={{display: formData?.privacy === "public" ? "flex" : "none"}} className="flex-col gap-2">
                        <Label>Packages</Label>
                        <div className="flex flex-col gap-2">
                            <div className="grid grid-cols-[1fr_1fr_40px] gap-2">
                                <p className="text-xs text-muted-foreground">Name</p>
                                <p className="text-xs text-muted-foreground">Price</p>
                                <p></p>
                            </div>
                            {
                                packages?.map((_, pkgIndex) => (
                                    <div className="grid grid-cols-[1fr_1fr_40px] gap-2">
                                        <div className="w-full">
                                            <Input placeholder="eg, Family Plan" className="w-full text-xs" />
                                        </div>
                                        <div className="w-full">
                                            <Input placeholder="eg, 25,000" className="w-full text-xs" />
                                        </div>
                                        <div className="w-full grid place-content-center">
                                            <Button onClick={() => setPackages(prev => prev?.filter((_, dtIndex) => dtIndex !== pkgIndex))} size={"icon"} variant={"outline"}><Minus /></Button>
                                        </div>
                                    </div>
                                ))
                            }
                            <Button size={"icon"} onClick={() => setPackages(prev => ([...prev, {name: "", price: ""}]))} variant={"default"}><Plus /></Button>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <Label>Greeting message</Label>
                        <Textarea value={formData?.greeting} onChange={e => onChangeFormData("greeting", e?.target?.value)} rows={10} placeholder="eg. With great joy and excitement, we invite you to celebrate the union of Sarah Johnson and Michael Williams" className="text-sm" />
                    </div>

                    <div className="flex flex-col gap-2">
                        <Label>Date of event</Label>
                        <DatePicker onChangePicker={date => onChangeFormData("date", date)}/>
                    </div>

                    <div className="flex flex-col gap-2">
                        <Label>Event type</Label>
                        <div className="flex flex-col gap-0">
                            {eventTypesData.map((dt) => (
                                <div
                                    key={dt.value}
                                    onClick={() => onChangeFormData("eventType", dt?.value)}
                                    className="flex items-center gap-2 border-b p-3 bg-accent/20 rounded-md cursor-pointer"
                                >
                                    <div
                                        className="size-5 grid place-content-center border border-primary rounded-full bg-background">
                                        {formData?.eventType === dt?.value && <Check size={12}/>}
                                    </div>
                                    <p className="text-sm">{dt.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <Label>Budget</Label>
                        <Input type="tel" placeholder="eg, 20,000,000" value={formData?.budget} onChange={e => onChangeFormData("budget", e?.target?.value)}/>
                    </div>

                    <div className="flex flex-col gap-2">
                        <Label>Number of attendees</Label>
                        <Input type="tel" placeholder="eg, 59" value={formData?.attendees} onChange={e => onChangeFormData("attendees", e?.target?.value)}/>
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
                                                            .map(serviceProvider => {
                                                                const _isSelected = !!formData?.features?.filter(dt => dt?.id === serviceProvider?.name)?.length;
                                                                return (
                                                                <Sheet key={serviceProvider?.name}>
                                                                    <SheetTrigger>
                                                                        <div
                                                                            className={
                                                                                clsx(
                                                                                    "flex flex-col gap-1 items-center rounded-md py-2 px-4 relative",
                                                                                    _isSelected && "border bg-gray-100 shadow-md"
                                                                                )
                                                                            }>
                                                                            
                                                                            <div className={
                                                                                clsx(
                                                                                    "absolute right-2 top-2",
                                                                                    !_isSelected && "hidden",
                                                                                    _isSelected && "size-4 border rounded-full bg-primary/20 grid place-content-center"
                                                                                )
                                                                            }>
                                                                                <Check size={12} />
                                                                            </div>
                                                                            <div
                                                                                className="size-16 rounded-full border-4 border-white">
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

                                                                        <ProviderProfile serviceProvider={serviceProvider} isSelected={_isSelected} onChangeFormData={onChangeFormData} />
                                                                    </SheetContent>
                                                                </Sheet>
                                                            )})
                                                    }
                                                </div>
                                            </div>
                                        );
                                    })}
                                    <div className="flex gap-2 flex-col items-center my-8">
                                        <Paragraph className="text-sm font-normal text-muted-foreground">Total</Paragraph>
                                        <Paragraph className="text-4xl font-black">
                                            {
                                                formData
                                                    ?.features
                                                    ?.map(dt => dt?.id)
                                                    ?.map(dt => serviceProviders?.find(dt2 => dt2?.name === dt)?.price)
                                                    ?.reduce((acc, itr) => acc + (isNaN(Number(itr) ?? 0) ? 0 : (Number(itr) ?? 0)), 0)
                                                    ?.toLocaleString()
                                            }
                                        </Paragraph>
                                    </div>
                                </div>
                            </div>
                        ) : null}
                    </div>

                    <div className="flex flex-col gap-2">
                        <Label>Payment</Label>
                        <div className="flex flex-col gap-4 justify-between text-sm border-t py-4">
                            <div className="flex items-center gap-4 justify-between text-sm px-4">
                                <p>Use Changisha</p>
                                <Switch checked={formData?.useChangisha} onCheckedChange={val => onChangeFormData("useChangisha", val)} />
                            </div>
                            {
                                formData?.useChangisha
                                    ? (
                                        <>
                                            <small className="text-center">Your changisha accounts</small>
                                            <div className="flex flex-col gap-0">
                                                {
                                                    [
                                                        {label: "Changisha Account 1", value: "changisha-account-1"},
                                                        {label: "Changisha Account 2", value: "changisha-account-2"},
                                                        {label: "Create Changisha Account Automatically", value: "create-account-automatically"},
                                                    ].map(dt => (
                                                        <div
                                                            key={dt.value}
                                                            onClick={() => onChangeFormData("changishaAccount", dt?.value)}
                                                            className="flex items-center gap-2 border-b p-3 bg-accent/20 rounded-md cursor-pointer"
                                                        >
                                                            <div
                                                                className="size-5 grid place-content-center border border-primary rounded-full bg-background">
                                                                {formData?.changishaAccount === dt?.value && <Check size={12}/>}
                                                            </div>
                                                            <p className="text-sm">{dt.label}</p>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        </>
                                    )
                                    : null
                            }
                        </div>
                    </div>

                    <Button onClick={onCreateEvent}>
                        <Paragraph className="text-sm">Create Event</Paragraph>
                        <MoveRight/>
                    </Button>
                </>
            )}
        </div>
    );
}