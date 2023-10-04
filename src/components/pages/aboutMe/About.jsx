import React from "react";
import "./About.scss";
import line from "../../../assets/img/line.png";

function About() {
  return (
    <div className="content-about">
      <div className="about">
        <h1>A B O U T M E</h1>
        <img src={line} alt="" />
        <p>
          Hello! I'm Zahra. I am a one year old frontend developer Experience in
          this area.
          <br />
          Since I was a teenager, I have been very interested in the world of
          Computers and technology. <br />
          This interest made me interested in programming at a young age
          interested. <br /> My first introduction to programming was done via
          simpler languages like HTML and CSS, which worked for me made it
          possible to create simple websites.
          <br />
          Programming is more than a passion for me. <br />
          It's a way to make change and real change To solve problems.
          <br />
          I'm also always looking for new technologies and the like Improving my
          programming skills so I can learn new and interesting projects for the
          computer industry and society can contribute. <br />
          When I'm not at work, I'm designing and experimenting happy with other
          functions that might be interesting. <br />
          My goal is promotion and improvement and I am always ready for that
          new challenges and collaboration with different people people in
          harmony with this goal. <br />
          If you would like to collaborate or network with me, I would like to
          hear more. <br />
          <br />
          Thank you for taking the time to find out more about me experience.
        </p>
      </div>
    </div>
  );
}

export default About;
