import { useCallback, useState } from "react";
import { useNavigate } from "react-router";
import { BackButton } from "../../components/ui/back-button.tsx";
import { Title } from "../../components/ui/title.tsx";
import ROUTE_NAMES from "../../config/router/route-names.ts";
import { StepOne } from "./components/step1.tsx";
import { StepTwo } from "./components/step2.tsx";
import { StepThree } from "./components/step3.tsx";

export type StepType = 1 | 2 | 3;

export function EventCreate() {
    const [currentStep, setCurrentStep] = useState<StepType>(1);
    const onChangeStep = useCallback(
        (step: StepType) => setCurrentStep(step),
        []
    );
    const navigate = useNavigate();
    const onGoBackToMEvents = () => {
        const confirmed = confirm("Are you sure you want to go to My Events?. You will lose all progress you've made so far")
        if(confirmed) navigate(ROUTE_NAMES.EVENTS);
    }

    return (
        <div className={"flex flex-col gap-4 p-4 min-h-screen pb-16"}>
            <BackButton onClick={onGoBackToMEvents} route={ROUTE_NAMES.EVENTS} label="My Events"/>
            <Title level={"h2"}>Create an Event ({currentStep}/3)</Title>

            {currentStep === 1 && <StepOne onChangeStep={onChangeStep}/>}
            {currentStep === 2 && <StepTwo onChangeStep={onChangeStep}/>}
            {currentStep === 3 && <StepThree onChangeStep={onChangeStep}/>}
        </div>
    );
}

