import React from "react";
import { useState } from "react";
import Inventaire from "./Inventaire";
import "./style.css";

const Resume = () => {
  const [inventaire, setInventaire] = useState("");
  const [ajout, setAjout] = useState([]);

  const handleInput = (e) => setInventaire(e.target.value);
  const handleClick = () => {
    if (inventaire) {
      setAjout((ajout) => [...ajout, inventaire]);
      setInventaire("");
    }
  };

  return (
    <div className="container">
      <h2 className="title2">Proposition exercice 1</h2>
      <div className="resume">
        <h1 className="ResumeH1">Stock</h1>
        <form className="ResumeForm">
          <input
            className="ResumeInput"
            value={inventaire}
            onChange={handleInput}
            type="text"
            placeholder="Inventaire"
            id="name"
          />
        </form>
        <button
          className="ResumeButton"
          id="Ajout_Inventaire"
          onClick={handleClick}
        >
          {" "}
          Ajouter
        </button>
        <ul className="ResumeUl">
          {ajout.map((elem, index) => (
            <Inventaire
              key={index}
              inventaire={ajout[index]}
              removeElement={() => {
                setAjout(ajout.filter((_, i) => i !== index));
              }}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Resume;
