function Experience() {
  return (
    <div className="experience__card">
      <h3 className="experience__title">Zone | September 2021 - July 2023</h3>
      <p className="experience__description">
        Zone is a digital agency specializing in the design, development, and
        implementation of digital solutions. Zone focuses on helping clients
        across various industries create and optimize their digital presence to
        engage and connect with their target audience.
      </p>

      <p className="experience__description">
        During my time at Zone I worked on a couple of client projects.{" "}
        <strong>Elextrolux</strong> on their online retail store, and{" "}
        <strong>Greeneking</strong> on their online booking journey allowing
        users to book a table or occasion
      </p>
      <div className="responsibilities">
        <h3>My responsibilities included:</h3>
        <ul className="responsibilities-list">
          <li>
            Developing and maintaining web applications using React.js and other
            related technologies
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
            Participating in code reviews and providing constructive feedback to
            other developers
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Experience;
