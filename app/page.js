"use client";

import "./styles/page.css";
import { Fragment, useRef, useEffect } from "react";
import { useNav } from "./context/nav-context";
import Hero from "./components/page-sections/Hero";
import Experience from "./components/page-sections/Experience";
import Projects from "./components/page-sections/Projects";
import ContactForm from "./components/page-sections/ContactForm";

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
      <section id="hero" className="hero" ref={heroRef}>
        <Hero />
      </section>
      <section id="experience" className="experience" ref={experienceRef}>
        <h1 className="section-heading">Experience</h1>
        <Experience />
      </section>
      <section id="projects" className="projects" ref={projectsRef}>
        <h1 className="section-heading">Projects</h1>
        <Projects />
      </section>
      <section id="contact" className="contact" ref={contactRef}>
        <h1 className="section-heading">Contact Me</h1>
        <ContactForm />
      </section>
    </Fragment>
  );
}
