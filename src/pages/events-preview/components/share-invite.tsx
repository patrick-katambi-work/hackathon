import { Button, Input, Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@dynamic-gen/avengers-ui";
import { faker } from "@faker-js/faker";
import { Check, Search, Share, Share2Icon } from "lucide-react";

export function ShareInvite() {
    const contacts = Array.from({length: 14})
        .map(() => ({label: faker.person.fullName(), value: faker.phone.number()}))

    const selectedContacts = [contacts[0].value, contacts[3].value, contacts[4].value, contacts[7].value]

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button size="sm" variant={"secondary"}>
                    <Share />
                    Share Invite
                </Button>
            </SheetTrigger>
            <SheetContent side={"bottom"} className="h-[90vh] overflow-y-auto flex flex-col gap-4">
                <SheetHeader>
                    <SheetTitle className="text-start">Share Invite</SheetTitle>
                    <SheetDescription className="text-start">
                        Share invitations to friends and family
                    </SheetDescription>
                </SheetHeader>

                <Input Icon={<Search size={16} />} placeholder="Search contacts ..." />

                <div className="space-y-2">
                    {
                        contacts
                            .map((dt) => (
                                <div>
                                    <div
                                        key={dt.value}
                                        className="flex items-start gap-2 border-b p-3 bg-accent/20 rounded-md"
                                    >
                                        <div
                                            className="size-5 grid place-content-center border border-primary rounded-full bg-background">
                                            {selectedContacts.includes(dt.value) && <Check size={12}/>}
                                        </div>
                                        <div className="space-y-1">
                                            <p className="text-sm">{dt.label}</p>
                                            <p className="text-xs">{dt.value}</p>
                                        </div>
                                    </div>
                            </div>
                        ))
                    }
                </div>
                <br />
                <br />
                <br />

                <div className="fixed right-4 bottom-10 z-50 grid place-content-center">
                    <Button className="shadow-sm">
                        <Share2Icon />
                        Share Invite to {selectedContacts.length} people
                    </Button>
                </div>
            </SheetContent>
        </Sheet>
    )
}