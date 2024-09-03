"use client"


import {ReactNode} from "react";

const MagicButton = ({title, icon, iconPosition, classNames, handleClick}: {
    title: string,
    icon: ReactNode,
    iconPosition: string,
    classNames?: string,
    handleClick?: () => void
}) => {
    return (
        <button
            onClick={handleClick}
            className="relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span
                className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"/>
            <span
                className="inline-flex h-full w-full gap-2 cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                {iconPosition == "left" && icon}
                {title}
                {iconPosition == "right" && icon}
            </span>

        </button>
    );
};

MagicButton.propTypes = {};

export default MagicButton;