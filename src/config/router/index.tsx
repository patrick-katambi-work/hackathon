import {Route, Routes} from "react-router";
import ROUTE_NAMES from "./route-names.ts";
import {HomePage} from "../../pages/home-page";
import {BaseLayout} from "../../components/layout/base-layout.tsx";
import {LandingPage} from "../../pages/landing-page";
import {HomeValidateOtpPage} from "../../pages/home-validate-otp-page";
import {EventCreate} from "../../pages/events-create";

export default function RouterConfig() {
    return (
        <Routes>
            <Route path={ROUTE_NAMES.HOME} element={<BaseLayout />}>
                <Route path={ROUTE_NAMES.HOME} element={<HomePage />} />
                <Route path={ROUTE_NAMES.LANDING_OTP} element={<HomeValidateOtpPage />} />
                <Route path={ROUTE_NAMES.LANDING} element={<LandingPage />} />
                <Route path={ROUTE_NAMES.EVENTS_CREATE} element={<EventCreate />} />
            </Route>
        </Routes>
    )
}