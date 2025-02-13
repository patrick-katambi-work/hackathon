import React from "react";
import clsx from "clsx";

interface IParagraphProps {
    children: React.ReactNode;
    className?: string;
}

export function Paragraph({children, ...rest}: IParagraphProps) {
    return (
        <h1
            className={clsx(
                "font-normal text-base",
                rest?.className
            )}
            {...rest}
        >
            {children}
        </h1>
    )
}