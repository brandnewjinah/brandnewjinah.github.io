import { IconType } from "./type";

export const ArrowRight = ({ width = 24, height = 24, stroke = 1, color = "#000" }: IconType) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
    );
};
