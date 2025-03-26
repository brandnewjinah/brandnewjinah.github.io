import { useEffect, useRef } from "react";
import lottie, { AnimationItem } from "lottie-web";
import animationData from "@/lottie/json/p001.json";

import styles from "./lottie.module.scss";

const P001 = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const animationRef = useRef<AnimationItem | null>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        // Create animation instance
        animationRef.current = lottie.loadAnimation({
            container: containerRef.current,
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData,
        });

        // Cleanup function to destroy animation when component unmounts
        return () => {
            if (animationRef.current) {
                animationRef.current.destroy();
            }
        };
    }, []);

    return (
        <div className={styles.wrapper}>
            <div className="container" ref={containerRef}></div>
        </div>
    );
};

export default P001;
