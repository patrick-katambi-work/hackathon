import {useNavigate} from "react-router";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import ROUTE_NAMES from "../../config/router/route-names.ts";

const formSchema = z.object({
    msisdn: z.string().regex(/^(255|0)[0-9]{9}$/),
})


export function useHomePage() {
    const navigate = useNavigate();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            msisdn: "255",
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values?.msisdn)
        navigate(ROUTE_NAMES.LANDING_OTP)
    }

    return {
        form,
        onSubmit
    };
}