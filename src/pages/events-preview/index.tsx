import { Button } from "@dynamic-gen/avengers-ui";
import { EventPreview } from "../../components/event-preview";
import { BackButton } from "../../components/ui/back-button";
import { ChatWithProviders } from "./components/chat-with-providers";
import { MoveRight } from "lucide-react";

export function EventsPreview() {
    return (
        <div className={"flex flex-col gap-4 px-4"}>
            <BackButton label="My Events" />
            <EventPreview isOwner />
            <ChatWithProviders />
            <Button>Make Payment <MoveRight /></Button>
            <br/>
            <br/>
            <br/>
        </div>
    )
}