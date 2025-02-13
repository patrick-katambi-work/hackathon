import {MoveLeft} from "lucide-react";
import {Button} from "@dynamic-gen/avengers-ui";
import {useNavigate} from "react-router";

export function BackButton({route, label}: {route?: string, label?: string}) {
    const navigate = useNavigate();
    const onGoBack = route
        ? () => navigate(route)
        : () => navigate(-1);

    return <Button
        className={"w-fit"}
        variant={"ghost"}
        onClick={onGoBack}
    >
        <MoveLeft/>
        <p>{label}</p>
    </Button>
}