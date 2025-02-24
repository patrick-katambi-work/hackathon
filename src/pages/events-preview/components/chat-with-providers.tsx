import { Button, Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@dynamic-gen/avengers-ui";
import { MessageCircleMore } from "lucide-react";
import { ChatUi } from "./chat-ui";

export function ChatWithProviders() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <div className="fixed right-4 bottom-20 z-50 grid place-content-center">
                    <Button size="icon" className="rounded-full size-12 shadow-sm">
                        <MessageCircleMore />
                    </Button>
                </div>
            </SheetTrigger>
            <SheetContent side={"bottom"} className="h-[90vh] overflow-y-auto flex flex-col gap-4 rounded-t-xl">
                <SheetHeader>
                    <SheetTitle className="text-start">Chat with Providers</SheetTitle>
                    <SheetDescription className="text-start">
                        Chat with your providers to make agreements on your event
                    </SheetDescription>
                </SheetHeader>
                <ChatUi />
            </SheetContent>
        </Sheet>
    )
}