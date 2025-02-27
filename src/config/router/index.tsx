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
import { InterestsPage } from "../../pages/interests/index.tsx";
import { PublicEventPreview } from "../../components/public-event-preview.tsx";
import { EventOwnerPreview } from "../../components/event-owner-preview.tsx";
import { EventinvitePledgingPreview } from "../../components/event-invite-pledging-preview.tsx";
import { EventinvitePledgedPreview } from "../../components/event-invite-pledged-preview.tsx";
import { EventinvitePledgePaidPreview } from "../../components/event-invite-pledge-paid-preview.tsx";

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
                <Route path={ROUTE_NAMES.EVENTS_DETAIL_PUBLIC} element={<PublicEventPreview />} />
                <Route path={ROUTE_NAMES.EVENTS_DETAIL_OWNER} element={<EventOwnerPreview />} />
                <Route path={ROUTE_NAMES.EVENTS_DETAIL_INVITE_PLEDGED} element={<EventinvitePledgedPreview />} />
                <Route path={ROUTE_NAMES.EVENTS_DETAIL_INVITE_PLEDGING} element={<EventinvitePledgingPreview />} />
                <Route path={ROUTE_NAMES.EVENTS_DETAIL_INVITE_PLEDGE_PAID} element={<EventinvitePledgePaidPreview />} />
                <Route path={ROUTE_NAMES.EVENTS_EXPLORE} element={<EventsExplorePage />} />
                <Route path={ROUTE_NAMES.EVENTS_EXPLORE_PROFILE} element={<EventsExploreProfilePage />} />
                <Route path={ROUTE_NAMES.PROFILE} element={<ProfilePage />} />
                <Route path={ROUTE_NAMES.INTERESTS} element={<InterestsPage />} />
            </Route>
        </Routes>
    )
}