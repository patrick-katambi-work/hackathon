import { Button, Input, Label, RadioGroup, RadioGroupItem } from "@dynamic-gen/avengers-ui";
import { EventPreview } from "../../components/event-preview";
import { BackButton } from "../../components/ui/back-button";
import { ChatWithProviders } from "./components/chat-with-providers";
import { MoveRight } from "lucide-react";
import { useSearchParams } from "react-router";
import { useState } from "react";

export const eventsBank = [
    {isOwner: true, alreadyPledged: true,},
    {isOwner: true, alreadyPledged: false},
    {alreadyPledged: true, isinvited: true},
    {alreadyPledged: false, isinvited: true},
    {isPublic: true},
    {isPublic: true},
    {isPublic: true},
]

export function EventsPreview() {
    const [URLParams] = useSearchParams();
    const isOwner = URLParams.get("isOwner") === "true";
    const isinvited = URLParams.get("isinvited") === "true";
    const alreadyPledged = URLParams.get("alreadyPledged") === "true";
    const [selectedOption, setSelectedOption] = useState<"entire" | "custom">("entire")
    return (
        <div className={"flex flex-col gap-4 px-4"}>
            <BackButton label="My Events" />
            <EventPreview isOwner={isOwner} isinvited={isinvited} alreadyPledged={alreadyPledged}/>
            <ChatWithProviders />
            
            {
                alreadyPledged
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
                                            <Button variant={"secondary"} className="col-span-2 border">Pledge<MoveRight /></Button>
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
                )
            }

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
            <br/>
            <br/>
            <br/>
        </div>
    )
}