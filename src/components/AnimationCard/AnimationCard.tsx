import { Tag } from "../Tag";

import styles from "./card.module.scss";

interface Props {
    children: React.ReactNode;
    label: string;
    description?: {
        id: number;
        text: string;
    }[];
    links?: boolean;
    method: string;
}

export const AnimationCard = ({ children, label, method }: Props) => {
    return (
        <div className={styles.card}>
            <div>{children}</div>
            <div className={styles.info}>
                <div className="left">{label}</div>
                <div className="right">
                    <Tag group={method === "css" ? "a" : "b"} method={method} />
                </div>
            </div>
        </div>
    );
};
