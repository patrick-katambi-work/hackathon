import React from "react";
import clsx from "clsx";

interface IMutedParagraphProps {
    children: React.ReactNode;
    className?: string;
}

export function MutedParagraph({children, ...rest}: IMutedParagraphProps) {
    return (
        <h1
            className={clsx(
                "font-normal text-base text-muted-foreground",
                rest?.className
            )}
            {...rest}
        >
            {children}
        </h1>
    )
}