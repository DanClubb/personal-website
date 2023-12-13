import IMAGES from "../../../public/images/Images";
import ProjectCard from "../ProjectCard";

function Projects() {
    const projects = [
        {
            title: "Multiplayer TicTacToe",
            description:
                "An online multiplayer TicTacToe game allowing users on different devices to play against each other",
            tag: "done",
            url: "https://tic-tac-toe-6mi5.onrender.com/",
            tech: ["react", "socketio", "typescript", "tailwind"],
            imgPath: IMAGES.TicTacToe.src,
        },
        {
            title: "Frontend Mentor Challenges",
            description:
                "My solutions to challenges provided by Frontend Mentor",
            tag: "done",
            url: "https://danclubb-frontend-mentor-challenges.vercel.app/",
            tech: ["next", "css"],
            imgPath: IMAGES.FrontendMentorChallenges.src,
        },
        {
            title: "NoteShare",
            description: "",
            tag: "done",
            url: "https://noteshare-ten.vercel.app/",
            tech: [
                "next",
                "tailwind",
                "nextAuth",
                "trpc",
                "drizzle",
                "typescript",
            ],
            imgPath: IMAGES.noteshare.src,
        },
        // {
        //   title: "Trello",
        //   description:
        //     "A project management app that has taken inspiration from trello",
        //   tag: "Coming Soon",
        //   url: "",
        //   imgPath: IMAGES.placeholder.src,
        // },
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
                        imgPath={project.imgPath}
                    />
                );
            })}
        </div>
    );
}

export default Projects;
