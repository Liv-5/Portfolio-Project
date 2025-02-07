import Nav from "./Nav";

export default function Header() {
  return (
    <header
      style={{
        background:
          "linear-gradient(to right, rgba(125, 208, 202, 0.8), rgba(125, 136, 208, 0.8))",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "200px",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between", // Pushes h1 to the left & nav to the right
        padding: "0 20px", // Adds space on the sides
      }}
    >
      <h1 style={{ margin: 0 }}>Liv Vidal</h1>
      <Nav />
    </header>
  );
}
