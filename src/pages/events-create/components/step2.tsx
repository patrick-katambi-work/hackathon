import {
    Button
} from "@dynamic-gen/avengers-ui";
import { ArrowUp, Info, MoveLeft, MoveRight, Star } from "lucide-react";
import { Paragraph } from "../../../components/ui/paragraph.tsx";
import { StepType } from "../index.tsx";
import { serviceProviders } from "./step1.tsx";
import { MutedParagraph } from "../../../components/ui/muted-paragraph.tsx";
import { useState } from "react";
import clsx from "clsx";

type MessageType = "sent" | "received"
type ConversationType = {
    message: string,
    type: MessageType,
    date: string
}

export const sampleConversation: ConversationType[] = [
    {
        message: "Hello there? We need to discuss pickup time and what you need to bring on your end",
        type: "sent",
        date: new Date().toDateString()
    },
    {
        message: "Sure thing boss, whats on your mind",
        type: "received",
        date: new Date().toDateString()
    },
    {
        message: "I was thinking lets do big parades, chants and music on the side",
        type: "sent",
        date: new Date().toDateString()
    },
    {
        message: "Give me about an hour Ill get back to you with proper info",
        type: "received",
        date: new Date().toDateString()
    },
    {
        message: "looking foward to the big day",
        type: "received",
        date: new Date().toDateString()
    },
    {
        message: "🔥🔥🔥🔥🔥🔥",
        type: "sent",
        date: new Date().toDateString()
    },
]

export function StepTwo(props: { onChangeStep: (step: StepType) => void }) {
    const [selectedProvider, setSelectedProvider] = useState<string>();
    return (
        <div className="flex flex-col gap-6">
            <Paragraph className="text-sm">Give instructions to all service providers to make your day fantastic</Paragraph>

            <div className="whitespace-nowrap rounded-md overflow-x-auto flex flex-row gap-4 -mx-2 pb-2 pl-4">
                {serviceProviders?.map(serviceProvider => (
                    <div
                        onClick={() => setSelectedProvider(serviceProvider?.name)}
                        className={
                            clsx(
                                "flex flex-col gap-1 cursor-pointer items-center rounded-md py-2 px-4 relative",
                            )
                        }
                    >
                        {selectedProvider === serviceProvider?.name && (
                            <div className="absolute top-0 right-0 border size-6 rounded-full bg-gray-200 grid place-content-center">
                                <div className="size-4 bg-red-600 rounded-full"></div>
                            </div>
                        )}
                        <div
                            className="size-16 roundef-full border-4 border-white">
                            <img src={serviceProvider?.profile} alt=""
                                className="w-full h-full object-cover rounded-full"/>
                        </div>
                        <MutedParagraph className={"text-sm"}>{serviceProvider?.name}</MutedParagraph>
                        <div className={"flex items-center gap-1"}>
                            {Array.from({length: 5}, (_, index) => (
                                <Star
                                    size={12}
                                    fill={index > (serviceProvider?.rating - 1) ? "white" : "#212121"}
                                />
                            ))}
                        </div>
                        <MutedParagraph className={"text-xs text-blue-400"}>{serviceProvider?.category}</MutedParagraph>
                    </div>
                ))}
            </div>

            <div className="grid gap-2">
                {selectedProvider && <Paragraph className="text-sm font-black">Chat with {selectedProvider}</Paragraph>}

                <div className="p-4 bg-gray-50 border -mx-4 grid gap-4">
                    {selectedProvider ? (
                        <>
                            <MessagesBlock />
                            <div className="w-full flex items-end flex-col gap-2">
                                <textarea placeholder={"Say something"} className="rounded-md bg-white text-xs p-2 border h-12 w-full" />
                                <Button size={"icon"} className="rounded-full size-8"><ArrowUp /></Button>
                            </div>
                        </>
                    ) : (
                        <div className="text-gray-500 flex items-center gap-2">
                            <Info size={16} />
                            <Paragraph className="text-xs text-gray-500">Click on a provider above to load a chat</Paragraph>
                        </div>
                    )}
                </div>
            </div>

            <div className="p-4 bg-gray-50 border -mx-4 grid gap-4 mb-4">
                <div className="text-gray-500 flex items-start gap-2">
                    <Info size={20} />
                    <Paragraph className="text-xs text-gray-500">You have <strong>wedding</strong> as event type but you have not specified <strong>caterer and florist</strong></Paragraph>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
                <Button variant={"secondary"} onClick={() => props?.onChangeStep(1)}>
                    <MoveLeft/>
                    <Paragraph className="text-sm">Step 1/3</Paragraph>
                </Button>
                <Button
                    onClick={() => props?.onChangeStep(3)}
                    className="col-span-2"
                >
                    <Paragraph className="text-sm">Proceed</Paragraph>
                    <MoveRight/>
                </Button>
            </div>
        </div>
    );
}

function MessagesBlock() {
    return (
        <div className="flex flex-col gap-2">
            {sampleConversation?.map(convo => (
                <div className="flex flex-col gap-1">
                    <div className={
                        clsx(
                            "rounded-full w-fit max-w-[70vw] p-2 text-xs border text-gray-800",
                            convo?.type === "sent" ? "self-end rounded-br-none bg-blue-100" : "rounded-bl-none bg-green-100"
                        )
                    }>
                        {convo?.message}
                    </div>
                    <p className={
                        clsx(
                            "text-gray-500 text-[10px]",
                            convo?.type === "sent" && "self-end"
                        )
                    }>{convo?.date}</p>
                </div>
            ))}
        </div>
    )
}