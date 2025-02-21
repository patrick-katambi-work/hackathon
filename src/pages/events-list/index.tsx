import { Button } from "@dynamic-gen/avengers-ui";
import { Title } from "../../components/ui/title";
import { Plus } from "lucide-react";
import { useNavigate } from "react-router";
import ROUTE_NAMES from "../../config/router/route-names";

export function EventsListPage() {
    const navigate = useNavigate();
    const onClick = () => navigate(ROUTE_NAMES.EVENTS_CREATE)

    return (
        <div className="p-4 h-full relative">
            <Title level={"h2"}>My Events</Title>

            <div className="absolute right-4 bottom-4 z-50 grid place-content-center">
                <Button onClick={onClick} size="icon" className="rounded-full size-14 shadow-sm">
                    <Plus />
                </Button>
            </div>
        </div>
    )
}