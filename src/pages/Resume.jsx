import resume from "../assets/resume.pdf";

export default function Resume() {
  return (
    <div>
      <h1>Resume</h1>

      <div>
        <p className="download">
          Download my resume
          <a
            className="resumeLink"
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginLeft: "6px" }}
          >
            here!
          </a>
        </p>
        <h4>Front-end Proficiencies</h4>

        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>responsive design</li>
          <li>React</li>
          <li>Bootstrap</li>
        </ul>
        <h4>Back-end Proficiencies</h4>
        <ul>
          <li>APIs</li>
          <li>Node</li>
          <li>Express</li>
          <li>PostgreSQL</li>
        </ul>
      </div>
    </div>
  );
}
