import { ButtonHTMLAttributes } from "react";
import styles from "./button.module.scss";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant?: string;
    width?: string;
}

export const Button = ({ children, disabled, variant, width, onClick, ...rest }: Props) => {
    return (
        <button
            className={styles.button}
            onClick={onClick}
            disabled={disabled}
            data-variant={variant}
            data-width={width}
            {...rest}
        >
            {children}
        </button>
    );
};
