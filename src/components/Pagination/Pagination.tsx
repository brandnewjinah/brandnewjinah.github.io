import { ArrowLeft } from "@/assets/icons/ArrowLeft";
import { ArrowRight } from "@/assets/icons/ArrowRight";
import styles from "./pagination.module.scss";

interface Props {
    currPage?: number;
    home?: boolean;
    handlePrev: () => void;
    handleNext: () => void;
}

export const Pagination = ({ currPage, home, handlePrev, handleNext }: Props) => {
    return (
        <div className={styles.wrapper}>
            {home ? (
                <button className={styles.icon} onClick={handlePrev}>
                    <ArrowLeft width={20} height={20} color="#2A2A43" stroke={2} />
                </button>
            ) : (
                <>
                    {currPage !== 1 && (
                        <button className={styles.icon} onClick={handlePrev}>
                            <ArrowLeft width={20} height={20} color="#2A2A43" stroke={2} />
                        </button>
                    )}
                    {currPage !== 10 && (
                        <button className={styles.icon} onClick={handleNext}>
                            <ArrowRight width={20} height={20} color="#2A2A43" stroke={2} />
                        </button>
                    )}
                </>
            )}
        </div>
    );
};
