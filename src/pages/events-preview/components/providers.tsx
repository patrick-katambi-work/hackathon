import { Button, Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger, RadioGroup, RadioGroupItem, Label, Input } from "@dynamic-gen/avengers-ui";
import { serviceProviders } from "../../events-create/components/step1";
import { MoveRight } from "lucide-react";
import { useState } from "react";

export function EventServiceProviders() {
    const [val, setVal] = useState<string>()
    return (
        <div className="space-y-4">
            <div className="grid grid-cols-2 gap-2">
                {serviceProviders.map(provider => (
                    <div className="flex items-center flex-col gap-2 border p-2 rounded-lg">
                        <div style={{height: 40, width: 40}} className="bg-red-200 rounded-full">
                            <img src={provider?.profile} alt=""
                                    className="w-full h-full object-cover rounded-full"/>
                        </div>
                        <div className="flex flex-col gap-0.5 items-center text-center">
                            <p className="text-sm">{provider?.name}</p>
                            <p className="text-xs text-blue-400">{provider?.category}</p>
                            <p className="text-xs text-muted-foreground">{Number(provider?.price)?.toLocaleString()} TZS</p>
                        </div>
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button size={"sm"} className="mt-auto w-full">Pay now <MoveRight /></Button>
                            </SheetTrigger>
                            <SheetContent side={"bottom"} className="h-[40vh] overflow-y-auto flex flex-col gap-4 rounded-t-xl">
                                <SheetHeader>
                                    <SheetTitle className="text-start">Payent to {provider?.name}</SheetTitle>
                                    <SheetDescription className="text-start">Confirm amount to pay before continuing</SheetDescription>
                                </SheetHeader>

                                <div className="flex flex-col gap-4">
                                    <div className="flex items-center gap-4 justify-between">
                                        <p className="text-sm">Current Balance</p>
                                        <p className="font-black">19,945,000 TZS</p>
                                    </div>

                                    <RadioGroup value={val} onValueChange={setVal} className="flex items-center justify-center gap-4">
                                        <div className="flex items-center space-x-2">
                                            <RadioGroupItem value="entire" id="entire" />
                                            <Label htmlFor="entire">Entire Amount</Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <RadioGroupItem value="custom" id="custom" />
                                            <Label htmlFor="custom">Custom Amount</Label>
                                        </div>
                                    </RadioGroup>

                                    {val === "entire" && <Button>Make Payment <MoveRight /></Button>}
                                    {val === "custom" && (
                                        <div className="grid grid-cols-6 gap-4">
                                            <Input Icon={<small className="font-black">TZS</small>} defaultValue={provider?.price} className="col-span-3" />
                                            <Button className="col-span-3">Make Payment <MoveRight /></Button>
                                        </div>
                                    )}
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                ))}
            </div>
            <div className="flex items-center justify-between gap-4">
                <p className="text-xs text-muted-foreground">Total Amount</p>
                <p className="text-sm font-black text-muted-foreground text-right">{serviceProviders.reduce((acc, itr) => acc + Number(itr.price), 0)?.toLocaleString()} TZS</p>
            </div>
        </div>
    )
}