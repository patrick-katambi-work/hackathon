import {useCallback} from "react";
import {useSearchParams} from "react-router";
import {CalendarPlus, CalendarRange, Telescope} from "lucide-react";
import {z} from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {useNavigate} from "react-router";
import ROUTE_NAMES from "../../config/router/route-names.ts";

const formSchema = z.object({
    otp: z.string(),
})


export function useValidateOtpPage() {
    const navigate = useNavigate();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            otp: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values?.otp)
        navigate(ROUTE_NAMES.LANDING)
    }

    const [searchParams] = useSearchParams();
    const onClickAddEvent = useCallback(() => {}, []);
    return {
        form,
        onSubmit,
        msisdn: searchParams.get("msisdn"),
        actions: [
            {label: "Create an Event", onClick: onClickAddEvent, Icon: <CalendarPlus />, color: "text-[#123524]", bgColor: "bg-[#E9EBBD]"},
            {label: "My Events", onClick: onClickAddEvent, Icon: <CalendarRange />, color: "text-[#123524]", bgColor: "bg-[#F6DBFF]", count: 3},
            {label: "Explore", onClick: onClickAddEvent, Icon: <Telescope />, color: "text-[#123524]", bgColor: "bg-[#F8F5E9]"},
        ]
    };
}