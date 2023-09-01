import ProjectCard from "../ProjectCard";

function Projects() {
  const projects = [
    {
      title: "TicTacToe",
      description:
        "An online multiplayer TicTacToe game allowing users on different devices to play against each other",
      tag: "done",
      url: "https://tic-tac-toe-6mi5.onrender.com/",
      tech: ["react", "socketio", "typescript", "tailwind"],
    },
    // {
    //   title: "Note Share",
    //   description:
    //     "A web app to store and organise notes. Notes can be shared between users",
    //   tag: "Coming Soon",
    //   url: "",
    // },
    {
      title: "Frontend Mentor Challenges",
      description: "My solutions to challenges provided by Frontend Mentor",
      tag: "done",
      url: "https://danclubb-frontend-mentor-challenges.vercel.app/",
      tech: ["next", "css"],
    },
    {
      title: "Trello",
      description:
        "A project management app that has taken inspiration from trello",
      tag: "Coming Soon",
      url: "",
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
            url={project.url}
            tech={project.tech}
          />
        );
      })}
    </div>
  );
}

export default Projects;
