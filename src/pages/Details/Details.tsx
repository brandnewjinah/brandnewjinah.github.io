import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import { Header } from "@/components/Header";
import { projects } from "@/data/projects";

import styles from "./details.module.scss";
import { Github } from "@/assets/icons/Github";
import { Card } from "@/components/Card";
import { ArrowLeft } from "@/assets/icons/ArrowLeft";
import { ExternalLink } from "@/assets/icons/ExternalLink";

interface ProjectProps {
    id: number;
    header: string;
    subheader: string;
    stacks: {
        id: number;
        stack: string;
    }[];
    links?: {
        id: number;
        type: string;
        url: string;
    }[];
    link: string;
    details: {
        id: number;
        imageUrl: string;
        header: string;
        description: {
            id: number;
            text: string;
        }[];
    }[];
}

const Details = () => {
    const { id } = useParams();
    const [project, setProject] = useState<ProjectProps | undefined>();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchProject = () => {
            const numericId = id ? parseInt(id, 10) : undefined;
            const currentProject = projects.find((p) => p.id === numericId);
            setProject(currentProject);
            setIsLoading(false);
        };

        fetchProject();
        window.scrollTo(0, 0);
    }, [id]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!project) {
        return <div>Project not found</div>;
    }

    return (
        <div>
            <div className={styles.back}>
                <Link to="/">
                    <button className={styles.icon}>
                        <ArrowLeft width={20} height={20} color="#2A2A43" stroke={2} />
                    </button>
                </Link>
            </div>
            <Header title={project.header} variant="h1" />
            <p className={styles.subheader}>{project.subheader}</p>
            {project.stacks && project.stacks.length > 0 && (
                <div className={styles.stacks}>
                    <h4>
                        {project.stacks.map((stack, idx) => (
                            <span key={idx}>
                                {stack.stack}
                                {idx < project.stacks.length - 1 && <span>, </span>}
                            </span>
                        ))}
                    </h4>
                </div>
            )}
            <div className={styles.links}>
                {project.links &&
                    project.links.length > 0 &&
                    project.links.map((link) => {
                        if (link.url) {
                            if (link.type === "github") {
                                return (
                                    <a
                                        key={link.id}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.icon}
                                    >
                                        <Github width={16} height={16} />
                                    </a>
                                );
                            } else if (link.type === "external") {
                                return (
                                    <a
                                        key={link.id}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.icon}
                                    >
                                        <ExternalLink width={16} height={16} />
                                    </a>
                                );
                            }
                        }
                        return null;
                    })}
            </div>
            <div className={styles.content}>
                {project.details &&
                    project.details.length !== 0 &&
                    project.details.map((detail) => {
                        if (detail.id % 2 !== 0) {
                            return (
                                <Card
                                    key={detail.id}
                                    imgSrc={detail.imageUrl}
                                    title={detail.header}
                                    description={detail.description}
                                    reverse
                                    largeScreenRow={true}
                                />
                            );
                        } else {
                            return (
                                <Card
                                    key={detail.id}
                                    imgSrc={detail.imageUrl}
                                    title={detail.header}
                                    description={detail.description}
                                    largeScreenRow={true}
                                />
                            );
                        }
                    })}
            </div>
        </div>
    );
};

export default Details;
