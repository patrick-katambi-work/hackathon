import {Outlet} from "react-router";

export function BaseLayout() {
    return (
        <div className={""}>
            <Outlet />
        </div>
    )
}