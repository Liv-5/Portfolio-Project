import Project from "../components/Project";

const projects = [
  {
    title: "project 1",
    link: "",
  },
  {
    title: "project 2",
    link: "",
  },
  {
    title: "project 3",
    link: "",
  },
  {
    title: "project 4",
    link: "",
  },
  {
    title: "project 5",
    link: "",
  },
  {
    title: "project 6",
    link: "",
  },
];

export default function Portfolio() {
  return (
    <div className="container">
      <h1>Portfolio</h1>
      {projects.map((p) => (
        <Project title={p.title} />
      ))}
    </div>
  );
}
