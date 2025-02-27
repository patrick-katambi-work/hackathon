import { Search } from "lucide-react";
import { ServiceProvidersSearch } from "../../components/service-providers-search";
import { Title } from "../../components/ui/title";
import {
    Input,
    Tabs, TabsContent, TabsList, TabsTrigger 
} from '@dynamic-gen/avengers-ui'
import { UpcomingEvents } from "../landing-page";

export function EventsExplorePage() {
    return (
        <div className="p-4 h-full relative space-y-2">
            <Title level={"h2"}>Explore</Title>

            <Input Icon={<Search size={16} />} placeholder="Search ..." />

            <Tabs defaultValue="providers" className="w-full">
                <TabsList className="mx-auto bg-gray-100 w-full border">
                    <TabsTrigger value="providers" className="w-full">Providers</TabsTrigger>
                    <TabsTrigger value="events" className="w-full">Events</TabsTrigger>
                </TabsList>
                <div className="h-1" />
                <TabsContent value="providers"><ServiceProvidersSearch /></TabsContent>
                <TabsContent value="events"><UpcomingEvents hideTitle /></TabsContent>
            </Tabs>

            <br />
        </div>
    )
}