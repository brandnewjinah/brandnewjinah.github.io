import { About } from "@/features/About";
import { Contact } from "@/features/Contact";
import { Hero } from "@/features/Hero";
import { Projects } from "@/features/Projects";

const Home = () => {
    return (
        <>
            <Hero />
            <About />
            <Projects />
            <Contact />
        </>
    );
};

export default Home;
