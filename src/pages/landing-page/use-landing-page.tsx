import {useCallback, useMemo} from "react";
import {useNavigate, useSearchParams} from "react-router";
import jsonData from "../../config/data.json"
import {CalendarPlus, CalendarRange, Telescope, BellRing, UserRound} from "lucide-react";
import {IUser} from "../../config/types/user.ts";
import {IEvent} from "../../config/types/event.ts";
import ROUTE_NAMES from "../../config/router/route-names.ts";

export function useLandingPage() {
    const [searchParams] = useSearchParams();
    const onClickAddEvent = useCallback(() => {}, []);
    const data = useMemo(() => jsonData satisfies {user: IUser, events: IEvent[] }, [])
    const navigate = useNavigate();
    return {
        onClickAdd: onClickAddEvent,
        msisdn: searchParams.get("msisdn"),
        data,
        actions: [
            {label: "Create an Event", onClick: () => navigate(ROUTE_NAMES.EVENTS_CREATE), Icon: <CalendarPlus />, color: "text-[#123524]", bgColor: "bg-[#E9EBBD]"},
            {label: "My Events", onClick: onClickAddEvent, Icon: <CalendarRange />, color: "text-[#123524]", bgColor: "bg-[#F6DBFF]", count: data?.events?.length},
            {label: "Explore", onClick: onClickAddEvent, Icon: <Telescope />, color: "text-[#123524]", bgColor: "bg-[#F8F5E9]"},
        ],
        utilities: [
            {label: "Notifications", onClick: onClickAddEvent, Icon: <BellRing />, color: "text-[#123524]", bgColor: "bg-[#E9EBBD]", count: 5},
            {label: "My Profile", onClick: onClickAddEvent, Icon: <UserRound />, color: "text-[#123524]", bgColor: "bg-[#F6DBFF]"},
        ]
    };
}