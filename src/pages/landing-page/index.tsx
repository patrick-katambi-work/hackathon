import { Button } from "@dynamic-gen/avengers-ui";
import { BellRing } from "lucide-react";
import { Container } from "../../components/ui/container.tsx";
import { MutedParagraph } from "../../components/ui/muted-paragraph.tsx";
import { Title } from "../../components/ui/title.tsx";
import { useLandingPage } from "./use-landing-page.tsx";
import { EventSummary } from "../../components/event-summary.tsx";

export function LandingPage() {
    const {data} = useLandingPage();
    return (
        <div className={"flex flex-col gap-4"}>
            <div className={"p-4 min-h-[30vh] bg-[#FDEDE3] grid place-content-center gap-2 relative"}>
                <Button size="icon" variant='outline' className="absolute right-4 top-4 rounded-full">
                    <BellRing />
                </Button>
                <Title><span className={"font-normal"}>Hello,</span><br/> {data?.user?.name}</Title>
                <MutedParagraph><span className={"font-black text-xl"}>&ldquo;</span>Create an event, manage created
                    events and explore to your heart's content.<span
                        className={"font-black text-xl"}>&ldquo;</span></MutedParagraph>
            </div>

            <Container className={"grid gap-3 px-4"}>
                <MutedParagraph className={"text-muted-foreground text-sm"}>Public Events</MutedParagraph>
                <div className="flex flex-col gap-8">
                    {Array.from({length: 4}).map(() => <EventSummary isPublic />)}
                </div>
            </Container>
            <br/>
        </div>
    )
}