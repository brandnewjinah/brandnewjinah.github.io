import { Header } from "@/components/Header";
import layout from "@/assets/styles/layout.module.scss";
import styles from "./contact.module.scss";

export const Contact = () => {
    return (
        <section className={layout.section} aria-labelledby="contact-title">
            <Header title="Let's connect" id="contact-title" />
            <p className={styles.paragraph}>
                Feel free to reach out for collaboration, job opportunities, or just to say hello!
            </p>
            <ul className={styles.list}>
                <li>
                    <a
                        href="mailto:brandnewjinah@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        📧 Email: brandnewjinah@gmail.com
                    </a>
                </li>
                <li>
                    <a
                        href="https://github.com/brandnewjinah"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        💻 GitHub: github.com/brandnewjinah
                    </a>
                </li>
                <li>📄 Resume: Please request via email</li>
            </ul>
        </section>
    );
};
