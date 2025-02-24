import { Badge, Button, Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@dynamic-gen/avengers-ui";
import { faker } from "@faker-js/faker";
import { BellRing, Eye } from "lucide-react";
import { ShareInvite } from "./share-invite";

export const pledgers = [
    {name: faker.person.fullName(), pledge: 230000, paid: 150000},
    {name: faker.person.fullName(), pledge: 410000, paid: 185000},
    {name: faker.person.fullName(), pledge: 330000, paid: 250000},
    {name: faker.person.fullName(), pledge: 200000, paid: 50000},
    {name: faker.person.fullName(), pledge: 400000, paid: 255000},
    {name: faker.person.fullName(), pledge: 130000, paid: 100000},
    {name: faker.person.fullName(), pledge: 200000, paid: 200000},
    {name: faker.person.fullName(), pledge: 200000, paid: 200000},
    {name: faker.person.fullName(), pledge: 400000, paid: 255000},
    {name: faker.person.fullName(), pledge: 130000, paid: 100000},
    {name: faker.person.fullName(), pledge: 200000, paid: 200000},
]

export function ViewPledges() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button size="sm" variant={"secondary"}>
                    <Eye />
                    View Pledges
                </Button>
            </SheetTrigger>
            <SheetContent side={"bottom"} className="h-[90vh] overflow-y-auto flex flex-col gap-4">
                <SheetHeader>
                    <SheetTitle className="text-start">Pledges</SheetTitle>
                    <SheetDescription className="text-start">
                        Here are all pleges for your event and their status
                    </SheetDescription>
                </SheetHeader>
                <div className="space-y-1">
                    <p className="text-xs text-muted-foreground text-center">Pledges Collected</p>
                    <p className="text-sm text-muted-foreground text-center">{(14000000).toLocaleString()} / {(23000000).toLocaleString()} TZS</p>
                    <div className="h-3 border rounded-lg w-full bg-muted relative overflow-clip">
                        <div className="absolute w-[60%] h-full bg-red-500 rounded-r-full"></div>
                    </div>
                </div>
                <div className="space-y-2">
                    <div className="flex items-center gap-4 justify-between">
                        <ShareInvite />
                        <Button size="sm" variant={"secondary"}><BellRing /> Remind All</Button>
                    </div>
                    <br />
                    <div className="flex items-end justify-between gap-4">
                        <p className="text-sm text-muted-foreground">Total paid</p>
                        <p className="text-sm font-black text-muted-foreground">{pledgers?.reduce((acc, itr) => acc + itr?.paid, 0)?.toLocaleString()} TZS</p>
                    </div>
                    <div className="flex items-end justify-between gap-4">
                        <p className="text-sm text-muted-foreground">Total pending</p>
                        <p className="text-sm font-black text-muted-foreground">{pledgers?.reduce((acc, itr) => acc + (itr?.pledge - itr?.paid), 0)?.toLocaleString()} TZS</p>
                    </div>
                    <div className="flex items-end justify-between gap-4">
                        <p className="text-sm text-muted-foreground">Total pledges</p>
                        <p className="text-sm font-black text-muted-foreground">{pledgers?.reduce((acc, itr) => acc + itr?.pledge, 0)?.toLocaleString()} TZS</p>
                    </div>
                    <br />
                    {pledgers
                        ?.map(pledger => {
                            const remainingAmount = pledger?.pledge - pledger?.paid;
                            return (
                                <div className="space-y-1">
                                    <div className="flex items-end justify-between gap-4">
                                        <p className="text-sm">{pledger?.name}</p>
                                        {
                                            remainingAmount === 0
                                                ? <Badge variant={"outline"} className="!text-xs uppercase">
                                                    <small>completed</small>
                                                </Badge>
                                                : <p className="text-xs text-muted-foreground"><strong>{remainingAmount?.toLocaleString()}</strong> Remaining</p>
                                        }
                                    </div>
                                    <div className="h-2 border rounded-lg w-full bg-muted relative overflow-clip">
                                        <div style={{width: `${(pledger?.paid/pledger?.pledge) * 100}%`}} className="absolute h-full bg-red-400 rounded-r-full"></div>
                                    </div>
                                </div>
                            )
                        })}
                </div>
            </SheetContent>
        </Sheet>
    )
}