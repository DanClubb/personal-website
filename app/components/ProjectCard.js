import "../styles/project-card.css";
import newTab from "../../public/new-tab.svg";
import IMAGES from "../../public/images/Images";
import TECH_LOGOS from "../../public/images/TechLogos";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Fragment } from "react";

function ProjectCard({ title, description, tag, url, tech }) {
  const project = title.split(" ").join("");
  console.log(tech);
  return (
    <article className="project">
      <header className="project__title-container">
        <h2 className="project__title">{title}</h2>
      </header>

      {tag === "done" ? (
        <Carousel
          className="project__img"
          autoPlay
          infiniteLoop
          showArrows={false}
          showIndicators={false}
          showThumbs={false}
        >
          {Object.keys(IMAGES[project]).map((img) => (
            <div key={img}>
              <Image
                className="project__img"
                src={IMAGES[project][img]}
                width={300}
                height={150}
                alt="view in new tab icon"
              />
            </div>
          ))}
        </Carousel>
      ) : (
        <div className="image-placeholder">
          <Image
            src={IMAGES.placeholder}
            width={58}
            height={58}
            alt="placeholder for an image"
          />
        </div>
      )}

      <p className="project__description">{description}</p>
      {tech && (
        <div className="project__tech">
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
      )}
      <div className={`tags ${tag === "done" && "done"}`}>
        {tag === "done" ? (
          <Fragment>
            <a className="project-link" href={url} target="_blank">
              View Live{" "}
              <Image
                src={newTab}
                width={25}
                height={25}
                alt="view in new tab icon"
              />
            </a>

            <a
              className="project-link"
              href="https://github.com/DanClubb/tic-tac-toe"
              target="_blank"
            >
              View GitHub
              <Image
                src={IMAGES.githubLogo}
                width={25}
                height={25}
                alt="GitHub link"
              />
            </a>
          </Fragment>
        ) : (
          <div className="project__tag">
            <div className="project__tag-dot"></div>
            {tag}
          </div>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;
