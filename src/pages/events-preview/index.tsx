import { Button, Input, Label, RadioGroup, RadioGroupItem, Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@dynamic-gen/avengers-ui";
import { CheckCircle2, MoveRight, ScanQrCode } from "lucide-react";
import { useState } from "react";
import { useSearchParams } from "react-router";
import qrImage from "../../assets/qr.webp";
import { EventPreview } from "../../components/event-preview";
import { BackButton } from "../../components/ui/back-button";
import { ChatWithProviders } from "./components/chat-with-providers";
import clsx from "clsx";

export const eventsBank = [
    {isOwner: true, alreadyPledged: true, paid: true},
    {isOwner: true, alreadyPledged: false, paid: false},
    {alreadyPledged: true, isinvited: true, paid: false},
    {alreadyPledged: true, isinvited: true, paid: true},
    {alreadyPledged: false, isinvited: true, paid: false},
    {isPublic: true, paid: true},
    {isPublic: true, paid: false},
    {isPublic: true, paid: true},
]

export function EventsPreview() {
    const [URLParams] = useSearchParams();
    const isOwner = URLParams.get("isOwner") === "true";
    const paid = URLParams.get("paid") === "true";
    const isPublic = URLParams.get("isPublic") === "true";
    const isinvited = URLParams.get("isinvited") === "true";
    const alreadyPledged = URLParams.get("alreadyPledged") === "true";
    const [selectedOption, setSelectedOption] = useState<"entire" | "custom">("entire")
    return (
        <div className={"flex flex-col gap-4 px-4"}>
            <BackButton label="" />
            <EventPreview isOwner={isOwner} isinvited={isinvited} alreadyPledged={alreadyPledged} isPublic={isPublic}/>
            {!isPublic && <ChatWithProviders />}

            {isPublic && paid && <CompletedPayment />}
            {isPublic && !paid && (
                <>
                    <div className="flex flex-col gap-1">
                        <p className="text-xs">Pay entrance Fee (<strong>25,000 TZS</strong>)</p>
                        <Button>Pay Entrance Fee <MoveRight /></Button>
                    </div>
                </>
            )}

            {!isPublic && paid && <CompletedPayment />}
            {!isPublic && !paid && (
                (
                    <>
                        {alreadyPledged
                        ? (
                            <div className="flex flex-col gap-3">
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
                                                <small><strong>87,000 TZS</strong> Remaining</small>
                                                <div className="grid grid-cols-5 gap-2">
                                                    <Input Icon={<small className="font-bold">TZS</small>} type="tel" placeholder="eg. 200,000" className="col-span-3" />
                                                    <Button variant={"secondary"} className="col-span-2 border">Pay Now<MoveRight /></Button>
                                                </div>
                                            </div>
                                        )
                                        : <Button variant={"secondary"} className="border">Pay Pledge<MoveRight /></Button>
                                }
                            </div>
                        )
                        : (
                            <div className="space-y-1">
                                <p className="text-xs">Make a pledge</p>
                                <div className="grid grid-cols-5 gap-2">
                                    <Input Icon={<small className="font-bold">TZS</small>} type="tel" placeholder="eg. 200,000" className="col-span-3" />
                                    <Button variant={"secondary"} className="col-span-2 border">Pledge<MoveRight /></Button>
                                </div>
                            </div>
                        )}

                        {
                            isOwner
                                ? (
                                    <div className="flex flex-col gap-1">
                                        <p className="text-xs">Pay for event</p>
                                        <Button>Pay For Event Now <MoveRight /></Button>
                                    </div>
                                )
                                : null
                        }
                    </>
                )
            )}
            <br/>
            <br/>
            <br/>
        </div>
    )
}

export function CompletedPayment() {
    return (
        <div className="w-full flex flex-col gap-4">
            <div className="flex items-center justify-center gap-1">
                <CheckCircle2 stroke="whitesmoke" fill="rgb(21 128 61 / var(--tw-bg-opacity, 1))" />
                <p className="text-sm text-green-700">Payment Successful</p>
            </div>
            <Sheet>
                <SheetTrigger asChild>
                    <Button className="w-full">
                        <ScanQrCode />
                        Get your ticket here
                    </Button>
                </SheetTrigger>
                <SheetContent side={"bottom"} className="h-[90vh] overflow-y-auto flex flex-col gap-4 rounded-t-xl">
                    <SheetHeader>
                        <SheetTitle className="text-start">
                            Scan your ticket
                        </SheetTitle>
                    </SheetHeader>
                    <img src={qrImage} alt="qr-code" />
                    {
                        [
                            {label: "Paid amount", value: 25000, isMoney: true},
                            {label: "Payment date", value: new Date().toDateString()},
                            {label: "Description", value: "Kimberly Koss's Party"},
                        ].map(dt => (
                            <div className="flex flex-col gap-0 items-center text-center">
                                <small>{dt?.label}</small>
                                <p 
                                    className={
                                        clsx(
                                            "font-black",
                                            dt?.isMoney ? "text-gray-900" : "font-semibold"
                                        )
                                    }
                                >{dt?.value?.toLocaleString()} {dt?.isMoney ? "TZS" : ""}</p>
                            </div>
                        ))
                    }
                </SheetContent>
            </Sheet>
        </div>
    )
}