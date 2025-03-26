import Avatar from "@/assets/avatar.webp";

import styles from "./hero.module.scss";

export const Hero = () => {
    return (
        <section className={styles.hero} aria-labelledby="hero-title">
            <div className={styles.content}>
                <div className={styles.text}>
                    <h1 id="hero-title" className={styles.heroTitle}>
                        <span>Hi, my</span>
                        <span className={styles.break}>
                            name is <span className={styles.highlight}>Jinah</span>
                        </span>
                    </h1>
                    <p className={styles.description}>
                        I'm a <span className={styles.highlight}>front-end developer</span> with a
                        solid UX/UI design background.
                    </p>
                </div>
                <div className={styles.imageContainer}>
                    <div className={styles.image}>
                        <img src={Avatar} alt="" aria-hidden="true" />
                    </div>
                </div>
            </div>
        </section>
    );
};
