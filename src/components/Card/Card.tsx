import { Github } from "@/assets/icons/Github";
import { Button } from "../Button";
import { ExternalLink } from "@/assets/icons/ExternalLink";

import styles from "./card.module.scss";

interface Props {
    id?: string | number;
    title: string;
    imgSrc?: string;
    description?: {
        id: number;
        text: string;
    }[];
    links?: boolean;
    reverse?: boolean;
    largeScreenRow?: boolean;
    clickable?: boolean;
}

export const Card = ({
    id,
    title,
    imgSrc,
    description,
    links,
    reverse,
    largeScreenRow = false,
    clickable = false,
}: Props) => {
    const parseText = (text: string) => {
        const parts = text.split(/(\*\*.*?\*\*)/g);

        return parts.map((part, index) => {
            if (part.startsWith("**") && part.endsWith("**")) {
                return <strong key={index}>{part.slice(2, -2)}</strong>;
            }
            return part;
        });
    };

    return (
        <div
            className={`
            ${styles.card} 
            ${largeScreenRow ? styles["large-screen-row"] : styles["small-screen-row"]}
            ${clickable ? styles.interactive : ""}
        `}
            role="article"
        >
            {imgSrc && (
                <div className={`${styles.image} ${reverse ? styles.reverse : ""}`}>
                    <img src={imgSrc} alt={`Thumbnail preview of ${title} project`} />
                </div>
            )}
            <div className={styles.details}>
                <h3 id={id ? `project-title-${id}` : undefined}>{title}</h3>
                {description && (
                    <ul className={styles.description} role="list">
                        {description &&
                            description.map((desc) => (
                                <li key={desc.id}>{parseText(desc.text)}</li>
                            ))}
                    </ul>
                )}
                {links && (
                    <div className={styles.buttons}>
                        <Button
                            variant="secondary"
                            aria-label={`View ${title} source code on GitHub`}
                        >
                            <Github width={20} height={20} />
                            <span>Github</span>
                        </Button>
                        <Button variant="secondary" aria-label={`View live demo of ${title}`}>
                            <ExternalLink width={20} height={20} />
                            <span>Live</span>
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
};
