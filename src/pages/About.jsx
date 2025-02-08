import japanImg from "../assets/japan.jpg";

export default function About() {
  return (
    <div className="aboutSection ">
      <h1>About Me</h1>

      <div className="aboutContent">
        <img
          className="japan"
          src={japanImg}
          alt="Eric and Olivia in front of Mt. Fuji"
        />

        <p className="aboutMe">
          I was born and raised in Ohio and attended Kent State University.
          After college, I became a flight attendant and moved to Miami,
          Florida, where I flew for nearly a decade. Wanting to challenge myself
          in a new direction, I carefully researched my next steps and chose to
          transition into coding. I'm now halfway through a coding bootcamp and
          eager to see where this new skill will take me. My husband and I share
          a deep love for travel, and among the many places we've visited, Japan
          and Scotland stand out as our favorites. Recently, we moved back to
          Ohio and celebrated an exciting milestone—purchasing our first home,
          which we happily share with our three cats.
        </p>
      </div>
    </div>
  );
}
