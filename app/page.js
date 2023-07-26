"use client";

import "./styles/page.css";
import { Fragment, useRef, useEffect } from "react";
import { useNav } from "./context/nav-context";
import Image from "next/image";
import heroDevices from "../public/hero-devices.svg";
import ProjectCard from "./components/ProjectCard";
import ContactForm from "./components/ContactForm";

const experiences = [
  { title: "The beginning", date: "March 2021" },
  {
    title: "Zone",
    date: "September 2021 - July 2023",
    responsibilities: [
      "Developing and maintaining web applications using React.js and other related technologies",
      "Collaborating with cross-functional teams including designers, product managers, and other developers",
      "Implementing responsive design and ensuring cross-browser compatibility",
      "Participating in code reviews and providing constructive feedback to other developers",
    ],
  },
  { title: "Next role", date: "Future" },
];

const projects = [
  {
    title: "TicTacToe",
    description:
      "An online multiplayer TicTacToe game allowing users on different devices to play against each other",
    tag: "In Progress",
  },
  {
    title: "Note Share",
    description:
      "A web app to store and organise notes. Notes can be shared between users",
    tag: "Coming Soon",
  },
  {
    title: "Trello",
    description:
      "A project management app that has taken inspiration from trello",
    tag: "Coming Soon",
  },
];

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
            accuracy.
            <br />
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
        <h1 className="section-heading">Experience</h1>
        <div className="experience__card">
          <h3 className="experience__title">
            Zone | September 2021 - July 2023
          </h3>
          <p className="experience__description">
            Zone is a digital agency specializing in the design, development,
            and implementation of digital solutions and experiences focusing on
            helping clients across various industries create and optimize their
            digital presence to engage and connect with their target audience.
          </p>

          <p className="experience__description">
            During my time at Zone I worked on a couple client projects.{" "}
            <strong>Elextrolux</strong> on their online retail store, and{" "}
            <strong>Greeneking</strong> on their online booking journey allowing
            users to book a table or occasion
          </p>
          <ul className="responsibilities">
            <h3>My responsibilities included:</h3>
            <li>
              Developing and maintaining web applications using React.js and
              other related technologies
            </li>
            <li>
              Collaborating with cross-functional teams including designers,
              product managers, and other developers
            </li>
            <li>
              Implementing responsive design and ensuring cross-browser
              compatibility
            </li>
            <li>
              Participating in code reviews and providing constructive feedback
              to other developers
            </li>
          </ul>
        </div>
      </section>
      <section id="projects" className="projects" ref={projectsRef}>
        <h1 className="section-heading">Projects</h1>
        <div className="projects-container">
          {projects.map((project) => {
            return (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                tag={project.tag}
              />
            );
          })}
        </div>
      </section>
      <section id="contact" cclassName="contact" ref={contactRef}>
        <h1 className="section-heading">Contact Me</h1>
        <ContactForm />
      </section>
    </Fragment>
  );
}
