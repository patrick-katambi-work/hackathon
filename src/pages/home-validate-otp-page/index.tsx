import {
    Button,
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
    InputOTP,
    InputOTPGroup,
    InputOTPSlot
} from '@dynamic-gen/avengers-ui';
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import { MoveRight } from "lucide-react";
import { BackButton } from "../../components/ui/back-button.tsx";
import { MutedParagraph } from "../../components/ui/muted-paragraph.tsx";
import { Paragraph } from "../../components/ui/paragraph.tsx";
import { Title } from "../../components/ui/title.tsx";
import ROUTE_NAMES from "../../config/router/route-names.ts";
import { useValidateOtpPage } from "./use-validate-otp-page.tsx";

export function HomeValidateOtpPage() {
    const {form, onSubmit} = useValidateOtpPage();

    return (
        <div className={"flex flex-col gap-4 min-h-screen"}>
            <div className={"p-4 flex flex-col gap-2"}>
                <BackButton route={ROUTE_NAMES.HOME}/>

                <Title level={"h3"}>Validate OTP</Title>

                <MutedParagraph>Please enter the code sent to your phone number</MutedParagraph>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
                        <FormField
                            control={form.control}
                            name="otp"
                            render={({field}) => (
                                <FormItem className={"self-center"}>
                                    <FormControl>
                                        <InputOTP {...field} maxLength={6} pattern={REGEXP_ONLY_DIGITS_AND_CHARS}>
                                            <InputOTPGroup>
                                                {Array.from({length: 6}).map((_, i) => (
                                                    <InputOTPSlot index={i}/>
                                                ))}
                                            </InputOTPGroup>
                                        </InputOTP>
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />

                        <Button type="submit">
                            <Paragraph>Get started</Paragraph>
                            <MoveRight/>
                        </Button>
                    </form>
                </Form>
            </div>
        </div>
    )
}