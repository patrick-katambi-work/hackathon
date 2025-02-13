import {Title} from "../../components/ui/title.tsx";
import {MutedParagraph} from "../../components/ui/muted-paragraph.tsx";
import {useLandingPage} from "./use-landing-page.tsx";
import {Container} from "../../components/ui/container.tsx";
    import {Paragraph} from "../../components/ui/paragraph.tsx";
import {LogOut} from "lucide-react";
import clsx from "clsx";
import {Button} from "@dynamic-gen/avengers-ui";

export function LandingPage() {
    const {actions, data, utilities} = useLandingPage();
    return (
        <div className={"flex flex-col gap-4"}>
            <div className={"p-4 min-h-[30vh] bg-[#FDEDE3] grid place-content-center gap-2 relative"}>
                <Title><span className={"font-normal"}>Hello,</span><br/> {data?.user?.name}</Title>
                <MutedParagraph><span className={"font-black text-xl"}>&ldquo;</span>Create an event, manage created
                    events and explore to your heart's content.<span
                        className={"font-black text-xl"}>&ldquo;</span></MutedParagraph>
            </div>

            <Container className={"grid gap-3 px-4"}>
                <div className={clsx("flex flex-col gap-1")}>
                    <MutedParagraph className={""}>Actions</MutedParagraph>
                    <MutedParagraph className={"text-sm text-muted-foreground"}>This is the starting point to your
                        journey in managing events and getting things done</MutedParagraph>
                </div>

                <div className={"grid grid-cols-2 gap-3"}>
                    {
                        actions.map(action => (
                            <div
                                key={action?.label}
                                className={
                                    clsx(
                                        "border cursor-pointer rounded-md px-4 py-6 flex flex-col items-center gap-2 relative",
                                        action?.bgColor,
                                        action?.color,
                                    )
                                }
                                 onClick={action?.onClick}
                            >
                                <div className={"size-8 grid place-content-center"}>
                                    {action?.Icon}
                                </div>
                                <Paragraph className={"text-sm"}>{action?.label}</Paragraph>
                                <div
                                    className={"size-4 text-xs grid place-content-center rounded-full border absolute right-2 top-2"}>
                                    <MutedParagraph className={"font-bold"}>{action?.count}</MutedParagraph>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </Container>

            <hr/>

            <Container className={"grid gap-3 px-4"}>
                <div className={clsx("flex flex-col gap-1")}>
                    <MutedParagraph className={""}>Utilities</MutedParagraph>
                    <MutedParagraph className={"text-sm text-muted-foreground"}>
                        Use these actions to solve your needs as they come. Whether its accessing notifications, setting
                        reminders, viewing your profile and more.
                    </MutedParagraph>
                </div>

                <div className={"grid grid-cols-3 gap-3"}>
                    {
                        utilities.map(utility => (
                            <div
                                key={utility?.label}
                                className={
                                    clsx(
                                        "p-4 cursor-pointer flex flex-col items-center gap-2 border rounded-md bg-accent relative",
                                    )
                                }
                                onClick={utility?.onClick}
                            >
                                <div className={
                                    clsx(
                                        "border rounded-md size-10 grid place-content-center"
                                    )
                                }>
                                    {utility?.Icon}
                                    {
                                        utility?.count
                                            ? (
                                                <div
                                                    className={"size-6 text-xs bg-primary/30 grid place-content-center rounded-full border absolute right-1 top-1"}>
                                                    <MutedParagraph
                                                        className={"font-bold"}>{utility?.count}</MutedParagraph>
                                                </div>
                                            )
                                            : null
                                    }
                                </div>
                                <Paragraph className={"text-sm"}>{utility?.label}</Paragraph>
                            </div>
                        ))
                    }
                </div>
            </Container>

            <hr/>

            <Container className={"grid gap-3 px-4"}>
                <Button variant={"link"}>
                    <LogOut/>
                    <p>Logout</p>
                </Button>
            </Container>

            <br/>
            <br/>
        </div>
    )
}