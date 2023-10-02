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
          Hallo! Ich bin Zahra. Ich bin ein Frontend Developer mit einjähriger
          Erfahrung in diesem Bereich.
          <br />
          Seit meiner Teenager interessierte ich mich sehr für die Welt der
          Computer und Technik. <br />
          Dieses Interesse hat mich schon in jungen Jahren für das Programmieren
          interessiert. <br /> Mein erster Einstieg in die Programmierung
          erfolgte über einfachere Sprachen wie HTML und CSS, die es mir
          ermöglichten, einfache Websites zu erstellen.
          <br />
          Programmieren ist für mich mehr als eine Leidenschaft. <br />
          Es ist eine Möglichkeit, Veränderungen herbeizuführen und reale
          Probleme zu lösen.
          <br />
          Außerdem bin ich immer auf der Suche nach neuen Technologien und der
          Verbesserung meiner Programmierkenntnisse, damit ich zu neuen und
          interessanten Projekten für die Computerindustrie und die Gesellschaft
          beitragen kann. <br />
          Wenn ich nicht bei der Arbeit bin, entwerfe und experimentiere ich
          gerne mit anderen Funktionen, die interessant sein könnten. <br />
          Mein Ziel ist Förderung und Verbesserung und ich bin immer bereit für
          neue Herausforderungen und die Zusammenarbeit mit verschiedenen
          Menschen im Einklang mit diesem Ziel. <br />
          Wenn Sie mit mir zusammenarbeiten oder sich mit mir vernetzen möchten,
          würde ich gerne mehr hören. <br />
          <br />
          Vielen Dank, dass Sie sich die Zeit genommen haben, mehr über mich zu
          erfahren.
        </p>
      </div>
    </div>
  );
}

export default About;
