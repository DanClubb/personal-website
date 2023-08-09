import ProjectCard from "../ProjectCard";

function Projects() {
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

  return (
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
  );
}

export default Projects;
