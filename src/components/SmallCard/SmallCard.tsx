import styles from "./card.module.scss";

interface Props {
    id?: string | number;
    title: string;
    imgSrc?: string;
    text?: string;
}

export const SmallCard = ({ id, title, imgSrc, text }: Props) => {
    return (
        <div className={styles.card} role="article">
            {imgSrc && (
                <div className={styles.image}>
                    <img src={imgSrc} alt={`Thumbnail preview of ${title}`} />
                </div>
            )}
            <div className={styles.details}>
                <h4 id={id ? `project-title-${id}` : undefined}>{title}</h4>
                <p>{text}</p>
            </div>
        </div>
    );
};
