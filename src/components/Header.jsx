import Nav from "./Nav";

import headerimg from "../assets/HEADER.jpg";

export default function Header() {
  return (
    <header
    // style={{
    //   // backgroundImage: `url(${headerimg})`,
    //   background:
    //     "linear-gradient(to top, rgba(125, 208, 202, 0.25), rgba(125, 136, 208, 0.25))",
    //   backgroundSize: "cover",
    //   backgroundPosition: "bottom",
    //   // objectFit: "contain",
    //   height: "200px",
    //   color: "black",
    //   display: "flex",
    //   alignItems: "center",
    //   justifyContent: "space-between", // Pushes h1 to the left & nav to the right
    //   padding: "0 40px", // Adds space on the sides
    //   // borderRadius: "25px",
    // }}
    >
      <h1>Liv Vidal</h1>
      <Nav />
    </header>
  );
}
