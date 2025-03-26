import { useEffect, useRef } from "react";
import lottie, { AnimationItem } from "lottie-web";

import styles from "./lottie.module.scss";

interface LottiePlayerProps {
    animationData: any;
}

const LottiePlayer = ({ animationData }: LottiePlayerProps) => {
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
    }, [animationData]);

    return (
        <div className={styles.wrapper}>
            <div className="container" ref={containerRef}></div>
        </div>
    );
};

export default LottiePlayer;
