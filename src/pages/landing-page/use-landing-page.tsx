import { useMemo } from "react";
import { useSearchParams } from "react-router";
import jsonData from "../../config/data.json";
import { IEvent } from "../../config/types/event.ts";
import { IUser } from "../../config/types/user.ts";

export function useLandingPage() {
    const [searchParams] = useSearchParams();
    const data = useMemo(() => jsonData satisfies {user: IUser, events: IEvent[] }, [])
    return {
        msisdn: searchParams.get("msisdn"),
        data,
    };
}