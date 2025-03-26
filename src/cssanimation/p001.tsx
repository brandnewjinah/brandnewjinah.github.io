import styles from "./cssanimation.module.scss";

const P001 = () => {
    return (
        <div className={`${styles.wrapper} ${styles.wrapper1}`}>
            <div>
                <div className={styles.text1}>HELLO</div>
            </div>
            <div>
                <div className={styles.text2}>THERE</div>
            </div>
        </div>
    );
};

export default P001;
