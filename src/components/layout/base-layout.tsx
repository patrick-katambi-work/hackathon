import {Outlet, useNavigate, NavLink, useLocation} from "react-router";
import {Home, Telescope, CalendarRange, UserRound} from "lucide-react"
import ROUTE_NAMES from "../../config/router/route-names";
import clsx from "clsx";
import { useMemo } from "react";

export function BaseLayout() {
    const navigate = useNavigate();
    const {pathname} = useLocation();
    const onClick = (url: string) => navigate(url)
    const urlsToHideBottomNav = [
        ROUTE_NAMES.EVENTS_CREATE
    ] as never as string[]
    const hideBottomNav = useMemo(() => urlsToHideBottomNav?.includes(pathname), [urlsToHideBottomNav, pathname]);
    return (
        <div className={""}>
            <div className={
                clsx(
                    "overflow-y-auto w-full",
                    hideBottomNav ? "min-h-screen h-full" : "h-[calc(100vh_-_65px)]"
                )
            }>
                <Outlet />
            </div>
            <div className={
                clsx(
                    "h-[65px] overflow-y-auto w-full border-t grid grid-cols-4",
                    hideBottomNav && "hidden"
                )
            }>
                {
                    [
                        {label: "Home", icon: <Home />, url: ROUTE_NAMES.LANDING},
                        {label: "My Events", icon: <CalendarRange />, url: ROUTE_NAMES.EVENTS},
                        {label: "Explore", icon: <Telescope />, url: ROUTE_NAMES.EVENTS_EXPLORE},
                        {label: "Profile", icon: <UserRound />, url: ROUTE_NAMES.PROFILE},
                    ].map(dt => (
                        <NavLink 
                            to={dt.url} 
                            // end
                            onClick={() => onClick(dt.url)} 
                            className={({isActive}) => clsx(
                                "h-full w-full flex flex-col gap-1 border-x border-x-transparent items-center justify-center",
                                isActive ? "text-gray-800 bg-red-100 border-x-red-200" : "text-muted-foreground/90 bg-[whitesmoke]"
                            )}
                        >
                            {dt?.icon}
                            <p className="text-xs">{dt?.label}</p>
                        </NavLink>
                    ))
                }
            </div>
        </div>
    )
}