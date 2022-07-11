import React, { useState } from "react";
import VarAfficheur from "./VarAficcheur";
import "./VarPassage.css";

const VarPassage = () => {
  const [passage, setPassage] = useState([]);
  const [ajout, setAjout] = useState([]);

  const handleClick = () => {
    setPassage((passage) => [...passage, ajout]);
    setAjout("");
  };

  const handleInput = (e) => {
    setAjout(e.target.value);
  };
  return (
    <div className="passage">
      <h1 className="header">Composant parent : Le passeur de variable</h1>
      <form>
        <input
          className="input"
          placeholder="Texte à faire passer"
          onChange={handleInput}
          value={ajout}
        />
      </form>
      <div className="pbutton">
        <button className="AddComponent" onClick={handleClick}>
          Appeler le composant
        </button>
      </div>
      {passage.map((elem, index) => (
        <div className="Afficheur" key={index}>
          <VarAfficheur passage={passage[index]} instance={index + 1} />
        </div>
      ))}
    </div>
  );
};

export default VarPassage;
