import "../styles/project-card.css";
import githubLogo from "../../public/github-mark.png";
import Image from "next/image";

function ProjectCard({ title, description, tag }) {
  return (
    <article className="project">
      <h2 className="project__title">{title}</h2>
      <p className="project__description">{description}</p>
      <div className="tags">
        <div className="project__tag">{tag}</div>
        {tag === "In Progress" ? (
          <a
            className="github"
            href="https://github.com/DanClubb/tic-tac-toe"
            target="_blank"
          >
            <Image src={githubLogo} width={50} height={50} alt="GitHub link" />
          </a>
        ) : null}
      </div>
    </article>
  );
}

export default ProjectCard;
