const ROUTE_NAMES = Object.freeze({
    HOME: '/',
    LANDING_OTP: '/validate-otp',
    LANDING: '/landing',
    PROFILE: '/profile',
    INTERESTS: '/interests',
    EVENTS: '/events',
    EVENTS_CREATE: '/events/create',
    EVENTS_DETAIL: '/events/:eventId',
    EVENTS_DETAIL_PUBLIC: '/events/:eventId/public',
    EVENTS_DETAIL_OWNER: '/events/:eventId/owner',
    EVENTS_DETAIL_INVITE_PLEDGED: '/events/:eventId/invite-pledged',
    EVENTS_DETAIL_INVITE_PLEDGING: '/events/:eventId/invite-pledging',
    EVENTS_DETAIL_INVITE_PLEDGE_PAID: '/events/:eventId/invite-pledge-paid',
    EVENTS_EXPLORE: '/events/explore',
    EVENTS_EXPLORE_PROFILE: '/events/explore/profile',
});

export default ROUTE_NAMES;