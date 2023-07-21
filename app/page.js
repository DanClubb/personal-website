"use client";

import "./styles/page.css";
import { Fragment, useRef, useEffect } from "react";
import { useNav } from "./context/nav-context";
import Image from "next/image";
import heroDevices from "../public/hero-devices.svg";

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
        <div className="hero__text">
          <h1 className="hero__text--header">
            Hi, I&apos;m <span className="hero__text--name">Daniel</span>
          </h1>
          <h3 className="hero__text--sub-header">Frontend Developer</h3>
          <p className="hero__text--paragraphy">
            I am a frontend developer who loves problem solving while creating
            complex functionality and implementing designs with pixel-perfect
            accuracy.{" "}
          </p>
          <p className="hero__text--paragraphy">
            Away from the keyboard I enjoy learning new skills, keeping fit and
            recharging my batteries while socialising with friends
          </p>
        </div>

        <div className="hero__devices-container">
          <Image
            src={heroDevices}
            fill={true}
            alt="collection of devices I use while working"
            className="hero__devices"
          />
        </div>
      </section>
      <section id="experience" className="experience" ref={experienceRef}>
        <h1>Experience</h1>
      </section>
      <section id="projects" className="projects" ref={projectsRef}>
        <h1>Projects</h1>
      </section>
      <section id="contact" cclassName="contact" ref={contactRef}>
        <h1>Contact</h1>
      </section>
    </Fragment>
  );
}
