import { useNavigate, useParams, Link } from "react-router-dom";
import { Animations } from "@/helper/Animations";

import { AnimationCard } from "@/components/AnimationCard";
import LottiePlayer from "@/lottie/LottiePlayer";
import { Pagination } from "@/components/Pagination";

import a01Lottie from "@/lottie/json/p001.json";
import a02Lottie from "@/lottie/json/p002.json";
import a03Lottie from "@/lottie/json/p003.json";
import a04Lottie from "@/lottie/json/p004.json";
import a05Lottie from "@/lottie/json/p005.json";
import a06Lottie from "@/lottie/json/p006.json";
import a07Lottie from "@/lottie/json/p007.json";
import a08Lottie from "@/lottie/json/p008.json";
import a09Lottie from "@/lottie/json/p009.json";
import a10Lottie from "@/lottie/json/p010.json";

import styles from "./lottie.module.scss";
import { Header } from "@/components/Header";
import { ArrowLeft } from "@/assets/icons/ArrowLeft";

const lottieAnimations: Record<number, any> = {
    1: a01Lottie,
    2: a02Lottie,
    3: a03Lottie,
    4: a04Lottie,
    5: a05Lottie,
    6: a06Lottie,
    7: a07Lottie,
    8: a08Lottie,
    9: a09Lottie,
    10: a10Lottie,
};

const Lottie = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const animationId = id ? parseInt(id, 10) : 1;
    const LOTTIEAnimation = lottieAnimations[animationId];

    const formattedId = animationId < 10 ? `0${animationId}` : `${animationId}`;
    const cssKey = `a${formattedId}` as keyof typeof Animations;
    const CSSAnimation = Animations[cssKey];

    const handlePrev = () => {
        const prevId = id ? Math.max(1, parseInt(id) - 1) : 1;
        navigate(`/lottie/${prevId}`);
    };

    const handleNext = () => {
        const nextId = id ? Math.max(1, parseInt(id) + 1) : 1;
        navigate(`/lottie/${nextId}`);
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.back}>
                <Link to="/">
                    <button className={styles.icon}>
                        <ArrowLeft width={20} height={20} color="#2A2A43" stroke={2} />
                    </button>
                </Link>
            </div>
            <Header title="Type in Motion" />
            <div>
                <h3 className={styles.subheader}>
                    Exploration of animated typography using CSS and Lottie. This project compares
                    pure CSS animations with Lottie-rendered animations side by side.
                </h3>
            </div>
            <main className={styles.main}>
                <div className={styles.grid}>
                    {CSSAnimation && (
                        <AnimationCard label="Method" method="css">
                            <CSSAnimation />
                        </AnimationCard>
                    )}
                    {LOTTIEAnimation && (
                        <AnimationCard label="Method" method="lottie">
                            <LottiePlayer animationData={LOTTIEAnimation} />
                        </AnimationCard>
                    )}
                    {!LOTTIEAnimation && !CSSAnimation && (
                        <AnimationCard label="Method" method="n/a">
                            <div>No animation available for this ID</div>
                        </AnimationCard>
                    )}
                </div>
            </main>
            <Pagination currPage={Number(id)} handlePrev={handlePrev} handleNext={handleNext} />
        </div>
    );
};

export default Lottie;
