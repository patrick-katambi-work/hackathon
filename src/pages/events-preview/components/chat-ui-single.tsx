import {
    Button
} from "@dynamic-gen/avengers-ui";
import clsx from "clsx";
import { ArrowUp } from "lucide-react";

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

export function ChatUiSingle() {
    return (
        <div className="flex flex-col gap-6">
            <MessagesBlock />
            <div className="flex items-end flex-col gap-2">
                <textarea placeholder={"Say something"} className="rounded-md bg-white text-xs p-2 border h-12 w-full" />
                <Button size={"icon"} className="rounded-full size-8"><ArrowUp /></Button>
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