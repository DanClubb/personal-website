"use client";

import { useState, useEffect, useRef, Fragment } from "react";
import Link from "next/link";
import { useNav } from "../context/nav-context";
import "../styles/header.css";

function Header() {
  const { currentSection } = useNav();

  const [mobileNavExpanded, setMobileNavExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const scrollWatcherRef = useRef(null);

  const toggleMobileNav = () => {
    setMobileNavExpanded((prev) => {
      return !prev;
    });
  };

  useEffect(() => {
    const navObserver = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setScrolled(!entry.isIntersecting);
      },
      { rootMargin: "50px" }
    );
    navObserver.observe(scrollWatcherRef.current);
  });

  return (
    <Fragment>
      <div data-scroll-watcher ref={scrollWatcherRef}></div>
      <header
        className={`nav-header ${scrolled ? "scrolled" : ""} ${
          mobileNavExpanded ? "mobile-nav-open" : ""
        }`}
      >
        <button
          className="mobile-nav-toggle"
          aria-controls="nav"
          aria-expanded={mobileNavExpanded}
          onClick={toggleMobileNav}
        >
          <span className="sr-only">Menu</span>
        </button>

        <nav>
          <ul id="nav" className="nav" data-visible={mobileNavExpanded}>
            <li className="home">
              <Link href="/" className="nav__link">
                DC
              </Link>
            </li>
            <li>
              <Link
                href="/#experience"
                className={`nav__link ${
                  currentSection === "experience" ? "active" : ""
                }`}
              >
                Experience
              </Link>
            </li>
            <li>
              <Link
                href="/#projects"
                className={`nav__link ${
                  currentSection === "projects" ? "active" : ""
                }`}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/#contact"
                className={`nav__link ${
                  currentSection === "contact" ? "active" : ""
                }`}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link href="curriculum-vitae" className="nav__link">
                Curriculum Vitae
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </Fragment>
  );
}

export default Header;
