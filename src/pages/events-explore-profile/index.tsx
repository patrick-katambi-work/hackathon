import { ProviderProfile } from "../../components/provider-profile";
import { BackButton } from "../../components/ui/back-button";
import { serviceProviders } from "../events-create/components/step1";

export function EventsExploreProfilePage() {
    const profile = serviceProviders[0]
    return (
        <div className="p-4 h-full relative space-y-4">
            <BackButton label="Explore" />

            <ProviderProfile serviceProvider={profile} />
            <br />
        </div>
    )
}