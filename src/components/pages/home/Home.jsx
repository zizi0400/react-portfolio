import React from "react";
import "./Home.scss";

function Home() {
  return (
    <div>
      <div className="black-bg"></div>
      <div className="home-content">
        <h3>Hi, I am</h3>
        <h1>Zahra Salar</h1>
        <p>Full Stack Web Developer</p>
        <div>
          <a href="https://github.com/zizi0400">Github</a>
          <a href="">linkedin</a>
          <a href="">xing</a>
        </div>
      </div>
      <div className="home-footer">
        <div className="home-footer-left">
          <h3>titel</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            amet, distinctio porro aspernatur cumque voluptatibus eius quasi
            repellat id error asperiores placeat sapiente sit consequatur
            assumenda fuga saepe quia quibusdam?
          </p>
        </div>
        <div className="home-footer-right">IT</div>
      </div>
    </div>
  );
}

export default Home;
