import { Button, Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@dynamic-gen/avengers-ui";
import { MessageCircleMore, Star } from "lucide-react";
import { ChatUiSingle } from "./chat-ui-single";
import { serviceProviders } from "../../events-create/components/step1";

export function ChatWithProvider() {
    const serviceProvider = serviceProviders[0];
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
                    <SheetTitle className="text-start">
                        <div className="flex items-center gap-2">
                            <div
                                className="size-16 roundef-full border-4 border-white">
                                <img src={serviceProvider?.profile} alt=""
                                    className="w-full h-full object-cover rounded-full"/>
                            </div>
                            <div className="space-y-0">
                                <p className="text-sm">{serviceProvider?.name}</p>
                                <div className={"flex items-center gap-1"}>
                                    {Array.from({length: 5}, (_, index) => (
                                        <Star
                                            size={12}
                                            fill={index > (serviceProvider?.rating - 1) ? "white" : "#212121"}
                                        />
                                    ))}
                                </div>
                                <p className="text-xs text-blue-400">{serviceProvider?.category}</p>
                            </div>
                        </div>
                    </SheetTitle>
                    <SheetDescription className="text-start font-black">
                        Chat with {serviceProvider?.name}
                    </SheetDescription>
                </SheetHeader>
                <ChatUiSingle />
            </SheetContent>
        </Sheet>
    )
}