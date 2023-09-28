import React from "react";
import "./Home.scss";
import github from "../../../assets/img/github.png";
import linkedin from "../../../assets/img/linkedin.png";
import xing from "../../../assets/img/xing.png";

function Home() {
  return (
    <div className="home">
      <div className="black-bg"></div>
      <div className="home-content">
        <h3>Hi, I am</h3>
        <h1>Zahra Salar</h1>
        <p>Full Stack Web Developer</p>
        <div className="icon-box">
          <a href="https://github.com/zizi0400">
            <img src={github} alt="" />
          </a>
          <a href="">
            <img src={linkedin} alt="" />
          </a>
          <a href="">
            <img src={xing} alt="" />
          </a>
        </div>
      </div>
      <div className="home-footer">
        <div className="home-footer-left">
          <h3>titel</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            amet, distinctio porro aspernatur cumque voluptatibus eius quasi
            repellat id error asperiores placeat sapiente sit consequatur
            assumenda fuga saepe quia quibusdam? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Laborum amet, distinctio porro
            aspernatur cumque voluptatibus eius quasi repellat id error
            asperiores placeat sapiente sit consequatur assumenda fuga saepe
            quia quibusdam?Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Laborum amet, distinctio porro aspernatur cumque voluptatibus
            eius quasi repellat id error asperiores placeat sapiente sit
            consequatur assumenda fuga saepe quia quibusdam?
          </p>
        </div>
        <div className="home-footer-right">IT</div>
      </div>
    </div>
  );
}

export default Home;
