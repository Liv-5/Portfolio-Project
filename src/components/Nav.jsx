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
    <nav className="main-header-menu">
      <section>
        {navLinks.map((l) => (
          <div className="">
            <a href={l.link}>{l.name}</a>
          </div>
        ))}
      </section>
    </nav>
  );
}
