"use client";

import { Fragment, useEffect, useRef } from "react";
import ContactForm from "./components/page-sections/ContactForm";
import Experience from "./components/page-sections/Experience";
import Hero from "./components/page-sections/Hero";
import Projects from "./components/page-sections/Projects";
import { useNav } from "./context/nav-context";
import "./styles/page.css";

export default function Home() {
    const { updateCurrentSection } = useNav();

    const heroRef = useRef(null);
    const experienceRef = useRef(null);
    const projectsRef = useRef(null);
    const contactRef = useRef(null);

    useEffect(() => {
        const sectionObserver = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                if (entry.isIntersecting) {
                    updateCurrentSection(entry.target.className);
                }
            },
            { threshold: 0.55 }
        );
        sectionObserver.observe(heroRef.current);
        sectionObserver.observe(experienceRef.current);
        sectionObserver.observe(projectsRef.current);
        sectionObserver.observe(contactRef.current);
    }, [updateCurrentSection]);

    return (
        <Fragment>
            <section id="hero" ref={heroRef}>
                <div className="hero container">
                    <Hero />
                </div>
            </section>
            <section id="projects" ref={projectsRef}>
                <div className="projects container">
                   <h2 className="section-heading">Projects</h2>
                    <Projects /> 
                </div>
                
            </section>
            <section id="experience" ref={experienceRef}>
                <div className="experience container">
                    <h2 className="section-heading">Experience</h2>
                    <Experience />
                </div>
            </section>
            <section id="contact" ref={contactRef}>
                <div className="contact container">
                    <h2 className="section-heading">Contact Me</h2>
                    <ContactForm />
                </div>
            </section>
        </Fragment>
    );
}
