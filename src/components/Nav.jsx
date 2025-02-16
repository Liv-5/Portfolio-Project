export default function Nav() {
  const navLinks = [
    {
      name: "About",
      link: "/",
    },
    {
      name: "Portfolio",
      link: "/Portfolio",
    },
    {
      name: "Contact",
      link: "/Contact",
    },
    {
      name: "Resume",
      link: "/Resume",
    },
  ];

  return (
    <nav>
      <section
        className="Nav navbar navbar-expand-lg"
        // style={{ display: "flex", gap: "20px" }}
      >
        {navLinks.map((l) => (
          <div className="navLink">
            <a href={l.link}>{l.name}</a>
          </div>
        ))}
      </section>
    </nav>
  );
}
