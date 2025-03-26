import { useEffect, useRef } from "react";
import lottie from "lottie-web";

import styles from "./lottie.module.scss";

const P004 = () => {
    const container = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (container.current) {
            const animation = lottie.loadAnimation({
                container: container.current,
                renderer: "svg",
                loop: true,
                autoplay: true,
                animationData: require("./json/p004.json"),
            });

            return () => {
                animation.destroy();
            };
        }
    }, []);

    return (
        <div className={styles.wrapper}>
            <div className="container" ref={container}></div>
        </div>
    );
};

export default P004;
