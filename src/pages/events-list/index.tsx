import { Button } from "@dynamic-gen/avengers-ui";
import { Title } from "../../components/ui/title";
import { Plus } from "lucide-react";
import { useNavigate } from "react-router";
import ROUTE_NAMES from "../../config/router/route-names";
import { Container } from "../../components/ui/container";
import { EventSummary } from "../../components/event-summary";

export function EventsListPage() {
    const navigate = useNavigate();
    const onClick = () => navigate(ROUTE_NAMES.EVENTS_CREATE)

    return (
        <div className="p-4 h-full relative space-y-4">
            <Title level={"h2"}>My Events</Title>

            <Container className={"grid gap-3"}>
                <div className="flex flex-col gap-8">
                    {Array.from({length: 4}).map(() => <EventSummary isOwner />)}
                </div>
            </Container>

            <div className="fixed right-4 bottom-20 z-50 grid place-content-center">
                <Button onClick={onClick} size="icon" className="rounded-full size-14 shadow-sm">
                    <Plus />
                </Button>
            </div>
            <br />
            <br />
            <br />
            <br />
        </div>
    )
}