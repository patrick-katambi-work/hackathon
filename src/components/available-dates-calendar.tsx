import { Calendar } from "@dynamic-gen/avengers-ui";

export function AvailableDatesCalendar() {
    return (
        <Calendar
            mode="multiple"
            data-available="yes"
            modifiersClassNames={{
                selected: "!bg-gray-200 line-through",
            }}
            selected={[
                    new Date(), 
                    (() => {
                        const today = new Date();
                        const tomorrow = new Date();
                        tomorrow.setDate(today.getDate() - 13);
                        return tomorrow;
                    })(), 
                    (() => {
                        const today = new Date();
                        const tomorrow = new Date();
                        tomorrow.setDate(today.getDate() - 5);
                        return tomorrow;
                    })(), 
                    (() => {
                        const today = new Date();
                        const tomorrow = new Date();
                        tomorrow.setDate(today.getDate() - 8);
                        return tomorrow;
                    })(), 
                    (() => {
                        const today = new Date();
                        const tomorrow = new Date();
                        tomorrow.setDate(today.getDate() - 10);
                        return tomorrow;
                    })(), 
                    (() => {
                        const today = new Date();
                        const tomorrow = new Date();
                        tomorrow.setDate(today.getDate() - 4);
                        return tomorrow;
                    })(), 
                    (() => {
                        const today = new Date();
                        const tomorrow = new Date();
                        tomorrow.setDate(today.getDate() + 3);
                        return tomorrow;
                    })(), 
                    (() => {
                        const today = new Date();
                        const tomorrow = new Date();
                        tomorrow.setDate(today.getDate() + 4);
                        return tomorrow;
                    })()
                ]
            }
        />
    )
}