import {Button} from "@dynamic-gen/avengers-ui";
import {Plus} from "lucide-react";

export function CreateEventButton(props: {onClick(): void}) {
    return (
        <Button size={"icon"} onClick={props.onClick} className={"rounded-full border p-6"}>
            <Plus />
        </Button>
    )
}