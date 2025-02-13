import React from "react";
import clsx from "clsx";

interface IContainerProps {
    children: React.ReactNode;
    className?: string;
}

export function Container({children, ...rest}: IContainerProps) {
    return (
        <div
            className={clsx(
                "p-4",
                rest?.className
            )}
            {...rest}
        >
            {children}
        </div>
    )
}