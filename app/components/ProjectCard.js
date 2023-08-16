import "../styles/project-card.css";
import newTab from "../../public/new-tab.svg";
import IMAGES from "../../public/images/Images";
import TECH_LOGOS from "../../public/images/TechLogos";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Fragment } from "react";

function ProjectCard({ title, description, tag, url, tech }) {
  return (
    <article className="project">
      <h2 className="project__title">{title}</h2>
      {tag === "done" ? (
        <Carousel
          className="project__img"
          autoPlay
          infiniteLoop
          showArrows={false}
          showIndicators={false}
          showThumbs={false}
        >
          <div>
            <Image
              className="project__img"
              src={IMAGES.ticTacToeHome}
              width={300}
              height={150}
              alt="view in new tab icon"
            />
          </div>
          <div>
            <Image
              className="project__img"
              src={IMAGES.ticTacToeGameboard}
              width={300}
              height={150}
              alt="view in new tab icon"
            />
          </div>
          <div>
            <Image
              className="project__img"
              src={IMAGES.ticTacToeMidGmae}
              width={300}
              height={150}
              alt="view in new tab icon"
            />
          </div>
          <div>
            <Image
              className="project__img"
              src={IMAGES.ticTacToeWin}
              width={300}
              height={150}
              alt="view in new tab icon"
            />
          </div>
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
          <figure>
            <Image
              src={TECH_LOGOS.react}
              width={30}
              height={30}
              alt="react logo"
            />
            <figcaption>react.js</figcaption>
          </figure>
          <figure>
            <Image
              src={TECH_LOGOS.socketio}
              width={30}
              height={30}
              alt="socket.io logo"
            />
            <figcaption>socket.io</figcaption>
          </figure>
          <figure>
            <Image
              src={TECH_LOGOS.typescript}
              width={30}
              height={30}
              alt="typescript logo"
            />
            <figcaption>typescript</figcaption>
          </figure>
          <figure>
            <Image
              src={TECH_LOGOS.tailwind}
              width={30}
              height={30}
              alt="tailwind logo"
            />
            <figcaption>tailwindcss</figcaption>
          </figure>
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
