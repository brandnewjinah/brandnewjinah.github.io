import styles from "./tag.module.scss";

interface Props {
    method: string;
    group?: string;
}

export const Tag = ({ method, group }: Props) => {
    return <div className={`${styles.tag} ${styles[`group${group}`]}`}>{method}</div>;
};
