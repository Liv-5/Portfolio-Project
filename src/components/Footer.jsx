import React from "react";

const Footer = () => {
  return (
    <footer>
      <a
        href="https://github.com/Liv-5"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i
          className="devicon-github-original-wordmark"
          style={{ fontSize: "80px" }}
        ></i>
      </a>
      <a
        href="https://www.linkedin.com/in/osmith5/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="devicon-linkedin-plain" style={{ fontSize: "80px" }}></i>
      </a>
      <a
        className="emaillink"
        href="mailto:olivia.smith5@outlook.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Email Me
      </a>
    </footer>
  );
};

export default Footer;
