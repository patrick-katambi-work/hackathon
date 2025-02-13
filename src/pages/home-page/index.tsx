import {useHomePage} from "./use-home-page.tsx";
import {Button, Form, FormControl, FormField, FormItem, FormMessage, Input} from '@dynamic-gen/avengers-ui'
import {Paragraph} from "../../components/ui/paragraph.tsx";
import {MoveRight, Smartphone} from "lucide-react";
import {Title} from "../../components/ui/title.tsx";
import {MutedParagraph} from "../../components/ui/muted-paragraph.tsx";

export function HomePage() {
    const {form, onSubmit} = useHomePage();

    return (
        <div className={"flex flex-col gap-4 min-h-screen"}>
            <div className={"h-[60vh] bg-[#FDEDE3] flex flex-col gap-2 items-center justify-center text-center p-4"}>
                <div
                    className={"size-20 text-4xl shadow-md bg-[#E9EBBD] border-4 border-white rounded-full grid place-content-center"}>
                    🚀
                </div>

                <Title>Sherehe-Hub</Title>

                <MutedParagraph><span className={"font-black text-xl"}>&ldquo;</span>Create an event, manage created
                    events and explore to your heart's content.<span
                        className={"font-black text-xl"}>&ldquo;</span></MutedParagraph>
            </div>

            <div className={"p-4 flex flex-col gap-4"}>
                <MutedParagraph>Before we proceed, please enter you phone number</MutedParagraph>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
                        <FormField
                            control={form.control}
                            name="msisdn"
                            render={({field}) => (
                                <FormItem>
                                    <FormControl>
                                        <Input placeholder={"Enter your phone number"} type={"tel"}
                                               Icon={<Smartphone size={16}/>} {...field} />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <Button type="submit">
                            <Paragraph>Continue</Paragraph>
                            <MoveRight/>
                        </Button>
                    </form>
                </Form>
            </div>
        </div>
    )
}