import "../styles/project-card.css";
import newTab from "../../public/new-tab.svg";
import IMAGES from "../../public/images/Images";
import TECH_LOGOS from "../../public/images/TechLogos";
import Image from "next/image";
import { useState } from "react";
import { Fragment } from "react";

function ProjectCard({ title, description, tag, url, tech, imgPath }) {
  const [cardIsOpen, setCardIsOPen] = useState(false);

  const toggleCardIsOpen = () => {
    setCardIsOPen((prev) => !prev);
  };

  return (
    <Fragment>
      {tag === "done" ? (
        <article className="project-card-stack" data-stack-open={cardIsOpen}>
          <div className="project-card stack-layer-one">
            <div className="project-card-header">
              <h2 className="project-title">{title}</h2>
              <button
                className="project-card-expand-control"
                onClick={toggleCardIsOpen}
              >
                <p className="project-card-expand-control-text">
                  {cardIsOpen ? "Show Less" : "Show More"}
                </p>
                <Image src={IMAGES.arrow} width={10} height={10} alt="arrow" />
              </button>
            </div>
            <div
              className="project-img"
              style={{
                background: `url(${imgPath}) center / cover no-repeat`,
              }}
            ></div>
          </div>
          <div
            className={`project-card stack-layer-two ${
              cardIsOpen ? "openLayerTwo" : "closeLayerTwo"
            }`}
          >
            <p className="project__description">{description}</p>
            <div className="project-tech">
              <h2>Built with:</h2>
              <div className="project-tech-icons">
                {tech.map((techName) => (
                  <figure key={techName}>
                    <Image
                      src={TECH_LOGOS[techName]}
                      width={30}
                      height={30}
                      alt={`${techName} logo`}
                    />
                    <figcaption>{techName}</figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </div>
          <div
            className={`project-card stack-layer-three ${
              cardIsOpen ? "openLayerThree" : "closeLayerThree"
            }`}
          >
            <div className="project-links">
              <a className="project-link" href={url} target="_blank">
                <Image
                  src={newTab}
                  width={35}
                  height={35}
                  alt="view in new tab icon"
                />
                View Live
              </a>

              <a
                className="project-link"
                href="https://github.com/DanClubb/tic-tac-toe"
                target="_blank"
              >
                <div className="github-background">
                  <Image
                    className="github-logo"
                    src={IMAGES.githubLogo}
                    width={35}
                    height={35}
                    alt="GitHub link"
                  />
                </div>
                View GitHub
              </a>
            </div>

            <button
              className="project-card-expand-control"
              onClick={toggleCardIsOpen}
            >
              <p className="project-card-expand-control-text">
                {cardIsOpen ? "Show Less" : "Show More"}
              </p>
              <Image src={IMAGES.arrow} width={10} height={10} alt="arrow" />
            </button>
          </div>
        </article>
      ) : (
        <article className="project-card-stack">
          <div className="project-card stack-layer-one">
            <div className="project-card-header">
              <h2 className="project__title">{title}</h2>
              <div class="project__tag">
                <div class="project__tag-dot"></div>Coming Soon
              </div>
            </div>
            <div
              className="project-img"
              style={{
                background: `url(${imgPath}) center / cover no-repeat`,
              }}
            ></div>
          </div>
          <div
            className={`project-card stack-layer-two ${
              cardIsOpen ? "openLayerTwo" : "closeLayerTwo"
            }`}
          ></div>
          <div
            className={`project-card stack-layer-three ${
              cardIsOpen ? "openLayerThree" : "closeLayerThree"
            }`}
          ></div>
        </article>
      )}
    </Fragment>
  );
}

export default ProjectCard;
