import { Link } from "react-router-dom";

import { Header } from "@/components/Header";
import { Card } from "@/components/Card";
import { SmallCard } from "@/components/SmallCard";
import { primaryProjects, otherProjects } from "@/data/projectData";

import layout from "@/assets/styles/layout.module.scss";
import styles from "./projects.module.scss";

export const Projects = () => {
    return (
        <section className={layout.section} aria-labelledby="Projects">
            <Header title="Front-end Works" id="frontend-works-title" />
            {primaryProjects &&
                primaryProjects.map((project) => (
                    <Link
                        key={project.id}
                        to={project.link}
                        aria-label={`View project: ${project.header}`}
                    >
                        <Card
                            imgSrc={project.image}
                            title={project.header}
                            description={project.description}
                            id={project.id}
                            clickable
                        />
                    </Link>
                ))}
            {otherProjects && (
                <div className={styles.other}>
                    <Header title="UX/UI Works" id="uxui-works-title" />
                    <div className={styles.grid}>
                        {otherProjects.map((project) => (
                            <Link
                                key={project.id}
                                to={project.link}
                                aria-label={`View project: ${project.header}`}
                            >
                                <SmallCard
                                    imgSrc={project.image}
                                    title={project.header}
                                    text={project.description}
                                    id={project.id}
                                />
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </section>
    );
};
