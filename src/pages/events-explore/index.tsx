import { ServiceProvidersSearch } from "../../components/service-providers-search";
import { Title } from "../../components/ui/title";

export function EventsExplorePage() {
    return (
        <div className="p-4 h-full relative space-y-4">
            <Title level={"h2"}>Explore</Title>

            <ServiceProvidersSearch />
            <br />
        </div>
    )
}