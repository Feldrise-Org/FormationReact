import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="PageHeader">
      <div className="logotxt">
        <a href="/">
          <img className="logo" src="./logo192.png" alt="logo"></img>
        </a>
        <Link className="linktitle" to={"/"}>
          Formation React
        </Link>
      </div>
      <div className="chapitre">
        <Link className="link" to={"/Introduction"}>
          Introduction
        </Link>
        <Link className="link" to={"/MiseEnPlace"}>
          Mise En Place
        </Link>
        <Link className="link" to={"/Sommaire"}>
          Sommaire
        </Link>
        <Link className="link" to={"/PassageVariable"}>
          Passage Variable
        </Link>
        <Link className="link" to={"/PassageFonction"}>
          Passage Fonction
        </Link>
        <Link className="link" to={"/Routage"}>
          Routage
        </Link>
      </div>
    </div>
  );
};

export default Header;
