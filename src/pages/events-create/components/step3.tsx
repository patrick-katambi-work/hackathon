import { Badge, Button } from "@dynamic-gen/avengers-ui";
import { MoveLeft } from "lucide-react";
import { useState } from "react";
import { StepType } from "..";
import { Paragraph } from "../../../components/ui/paragraph";
import { serviceProviders } from "./step1";

const paymentMethods = [
    {name: "My Wallet", value: "mpesa"},
    {name: "Changisha", value: "changisha"},
]

export function StepThree(props: { onChangeStep: (step: StepType) => void }) {
    const selectedInfo = [
        {label: "Name", value: "Juma's Wedding"},
        {label: "Date", value: new Date().toDateString()},
        {label: "Region", value: "Dar es Salaam"},
        {label: "District", value: "Kinondoni"},
        {label: "Street", value: "Kawe"},
        {label: "Event Type", value: "Wedding"},
        {label: "Privacy", value: "Private Event"},
        {label: "Features", value: ["Venue", "Music", "Transport"], isFeatures: true},
        {label: "Total", value: 6000000},
    ]
    return (
        <div className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-2">
                {
                    selectedInfo
                        .map(info => {
                            if(info?.isFeatures) {
                                return (
                                    <div className="flex flex-col gap-1">
                                        <p className="text-[10px] text-gray-500">{info?.label}</p>
                                        {
                                            info?.value?.map(feat => <Badge variant={"secondary"} className="w-fit border rounded-full text-xs">{feat}, <span className="text-gray-500 ml-1 font-normal"> {serviceProviders?.[0]?.name}</span></Badge>)
                                        }
                                    </div>
                                )
                            }
                            return (
                                <div className="flex flex-col gap-1">
                                    <p className="text-[10px] text-gray-500">{info?.label}</p>
                                    <p className="text-xs font-semibold">{info?.value?.toLocaleString()}</p>
                                </div>
                            )
                        })
                }
            </div>

            <hr />

            <Paragraph className="text-sm">Select payment method</Paragraph>

            <PaymentMethods />

            <div className="grid grid-cols-3 gap-4">
                <Button variant={"secondary"} onClick={() => props?.onChangeStep(2)}>
                    <MoveLeft/>
                    <Paragraph className="text-sm">Step 2/3</Paragraph>
                </Button>
            </div>
        </div>
    );
}

function PaymentMethods() {
    const [selectedMethod, setSelectedMethod] = useState<string>("mpesa")
    return (
        <div className="grid grid-cols-2 gap-4">
            {
                paymentMethods
                    ?.map(method => (
                        <div onClick={() => setSelectedMethod(method.value)} className="border cursor-pointer rounded-lg p-4 flex flex-col items-center gap-2 text-sm font-black">
                            {method.name}
                            <div className="border size-6 rounded-full bg-gray-200 grid place-content-center">
                                {selectedMethod === method?.value && <div className="size-4 bg-red-600 rounded-full"></div>}
                            </div>
                        </div>
                    ))
            }
        </div>
    )
}