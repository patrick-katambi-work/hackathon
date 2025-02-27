import { Badge, Button } from "@dynamic-gen/avengers-ui";
import { Minus, MoveRight, Plus } from "lucide-react";
import { useState } from "react";
import { Title } from "../../components/ui/title";
import clsx from "clsx";
import { useNavigate } from "react-router";
import ROUTE_NAMES from "../../config/router/route-names";

export function InterestsPage() {
    const interests = [
        "Weddings",
        "Corporate Events",
        "Birthday Parties",
        "Concerts & Music Festivals",
        "Charity Events",
        "Workshops & Classes",
        "Conferences & Seminars",
        "Social Gatherings",
        "Holiday Parties",
        "Networking Events",
        "Expos & Trade Shows",
        "Catering & Food Events",
        "Sports Events",
        "Pop-up Shops",
        "Themed Parties",
        "Bridal Showers & Baby Showers",
        "Graduation Parties",
        "Retirement Parties",
        "Product Launches",
        "Outdoor Events"
    ];

    const [selectedFeatures, setSelectedFeatures] = useState<string[]>([])

    const onAddOrRemoveInterest = (interest: string) => {
        const isExisting = Boolean(selectedFeatures?.find(dt => dt === interest));
        if(isExisting) setSelectedFeatures(prev => prev?.filter(dt => dt !== interest));
        else setSelectedFeatures(prev => [...prev, interest]);
    }

    const navigate = useNavigate();
    const onClick = () => navigate(ROUTE_NAMES.LANDING)

    return (
        <div className="px-4 flex flex-col gap-4">
            <Title>Tell us your interests</Title>
            <p className="text-sm">Choose a minimum of 3 interests and we'll curate the best events for your feed</p>
            <div className="flex flex-wrap gap-2">
                {interests?.map(interest => {
                    const isExisting = Boolean(selectedFeatures?.find(dt => dt === interest));
                    return (
                        <Badge 
                            onClick={() => onAddOrRemoveInterest(interest)} 
                            className={
                                clsx(
                                    "rounded-full cursor-pointer text-sm font-normal",
                                    isExisting && "bg-orange-200 text-orange-800 hover:bg-orange-200 hover:text-orange-800"
                                )
                            }
                            variant={isExisting ? "default" : "outline"}
                        >
                            <div className="flex items-center gap-1">
                                {isExisting ? <Minus size={14} /> : <Plus size={14} />}
                                <p>{interest}</p>
                            </div>
                        </Badge>
                    )
                })}
            </div>
            <Button onClick={onClick} disabled={selectedFeatures?.length < 3} className="w-fit self-end mt-4">Get Started <MoveRight /></Button>
        </div>
    )
}