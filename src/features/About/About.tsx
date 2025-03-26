import { Header } from "@/components/Header";
import styles from "./about.module.scss";
import layout from "@/assets/styles/layout.module.scss";

export const About = () => {
    return (
        <section className={layout.section} aria-labelledby="about-title">
            <Header title="More about me" id="about-title" />
            <p className={styles.paragraph}>
                I specialize in building accessible, responsive, and user-friendly web applications.
                I'm proficient in React, JavaScript/TypeScript, HTML, CSS/SCSS, and Node.js and I
                excel at translating design mockups into high-quality, scalable code — making sure
                it works beautifully and accessibly across all platforms.
            </p>
        </section>
    );
};
