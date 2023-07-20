"use client";

import "./styles/page.css";
import { Fragment, useRef, useEffect } from "react";
import { useNav } from "./context/nav-context";

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
        <h1 className="hero-head-text">
          Hi, I&apos;m <span className="hero-name">Daniel</span>
        </h1>
        <p className="hero-sub-text">Frontend Developer</p>
      </section>
      <section id="experience" className="experience" ref={experienceRef}>
        <h1>Experience</h1>
      </section>
      <section id="projects" className="projects" ref={projectsRef}>
        <h1>Projects</h1>
      </section>
      <section id="contact" className="contact" ref={contactRef}>
        <h1>Contact</h1>
      </section>
    </Fragment>
  );
}
