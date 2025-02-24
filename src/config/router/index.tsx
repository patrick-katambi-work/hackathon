import { Route, Routes } from "react-router";
import { BaseLayout } from "../../components/layout/base-layout.tsx";
import { EventCreate } from "../../pages/events-create";
import { EventsExplorePage } from "../../pages/events-explore/index.tsx";
import { EventsListPage } from "../../pages/events-list/index.tsx";
import { EventsPreview } from "../../pages/events-preview/index.tsx";
import { HomePage } from "../../pages/home-page";
import { HomeValidateOtpPage } from "../../pages/home-validate-otp-page";
import { LandingPage } from "../../pages/landing-page";
import ROUTE_NAMES from "./route-names.ts";
import { EventsExploreProfilePage } from "../../pages/events-explore-profile/index.tsx";
import { ProfilePage } from "../../pages/profile/index.tsx";

export default function RouterConfig() {
    return (
        <Routes>
            <Route path={ROUTE_NAMES.HOME} element={<HomePage />} />
            <Route path={ROUTE_NAMES.LANDING_OTP} element={<HomeValidateOtpPage />} />
            <Route path={ROUTE_NAMES.HOME} element={<BaseLayout />}>
                <Route path={ROUTE_NAMES.LANDING} element={<LandingPage />} />
                <Route path={ROUTE_NAMES.EVENTS} element={<EventsListPage />} />
                <Route path={ROUTE_NAMES.EVENTS_CREATE} element={<EventCreate />} />
                <Route path={ROUTE_NAMES.EVENTS_DETAIL} element={<EventsPreview />} />
                <Route path={ROUTE_NAMES.EVENTS_EXPLORE} element={<EventsExplorePage />} />
                <Route path={ROUTE_NAMES.EVENTS_EXPLORE_PROFILE} element={<EventsExploreProfilePage />} />
                <Route path={ROUTE_NAMES.PROFILE} element={<ProfilePage />} />
            </Route>
        </Routes>
    )
}