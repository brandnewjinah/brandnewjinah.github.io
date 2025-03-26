import styles from "./header.module.scss";

interface Props {
    id?: string;
    title: string;
    variant?: "h1" | "h2";
}

export const Header = ({ id, title, variant = "h2" }: Props) => {
    const HeadingTag = variant;

    return (
        <HeadingTag className={`${styles.title} ${styles[variant]}`} id={id}>
            {title}
        </HeadingTag>
    );
};
