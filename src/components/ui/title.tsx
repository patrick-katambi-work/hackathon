import React from "react";
import clsx from "clsx";

interface ITitleProps {
    children: React.ReactNode;
    level?: "h1" | "h2" | "h3" | "h4";
    className?: string;
}

export function Title({level = "h1", children, ...rest}: ITitleProps) {
    return (
        <h1
            className={clsx(
                level === "h1" && "text-3xl font-black",
                level === "h2" && "text-2xl font-black",
                level === "h3" && "text-xl font-black",
                level === "h4" && "text-lg font-black",
                rest?.className
            )}
            {...rest}
        >
            {children}
        </h1>
    )
}