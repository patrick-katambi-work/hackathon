import { ProviderProfile } from "../../components/provider-profile";
import { BackButton } from "../../components/ui/back-button";
import { serviceProviders } from "../events-create/components/step1";
import { ChatWithProvider } from "../events-preview/components/chat-with-provider";

export function EventsExploreProfilePage() {
    const profile = serviceProviders[0]
    return (
        <div className="p-4 h-full relative space-y-4">
            <BackButton label="Explore" />

            <ProviderProfile serviceProvider={profile} showCalendar />
            <br />
            <br />
            <br />
            <ChatWithProvider />
        </div>
    )
}