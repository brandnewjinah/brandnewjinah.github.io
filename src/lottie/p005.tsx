import { useEffect, useRef } from "react";
import lottie from "lottie-web";

import styles from "./lottie.module.scss";

const P005 = () => {
    const container = useRef(null);

    useEffect(() => {
        if (container.current) {
            const animation = lottie.loadAnimation({
                container: container.current,
                renderer: "svg",
                loop: true,
                autoplay: true,
                animationData: require("./json/p005.json"),
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

export default P005;
