import React, { useState } from "react";
import SetFonction from "./SetFonction";
import "./FonctionPassage.css";

const FonctionPassage = () => {
  const [compteur, setCompteur] = useState(0);
  const [enfant, setEnfant] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const handleClick = () => {
    setEnfant((enfant) => [0]);
    showResult ? setShowResult(false) : setShowResult(true);
  };

  return (
    <div className="passage">
      <h1 className="header">Composant mère : Passeur de fonction</h1>
      <h2 className="header">Valeur du compteur : {compteur}</h2>
      <div className="button">
        {showResult ? (
          <button className="input" onClick={handleClick}>
            Masquer
          </button>
        ) : (
          <button className="input" onClick={handleClick}>
            Afficher
          </button>
        )}
      </div>

      {enfant.map((elem, index) => (
        <div
          className="passage"
          key={index}
          style={{ display: showResult ? "block" : "none" }}
        >
          <SetFonction setCompteur={setCompteur} compteur={compteur} />
        </div>
      ))}
    </div>
  );
};

export default FonctionPassage;
