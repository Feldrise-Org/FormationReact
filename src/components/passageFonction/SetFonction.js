import React from "react";
import "./SetFonction.css";

const SetFonction = ({ compteur, setCompteur }) => {
  return (
    <div>
      <h1 className="header">Composant utilisant la fonction passée</h1>
      <div className="buttons">
        <button
          className="input"
          onClick={() => (compteur > 0 ? setCompteur(compteur - 1) : null)}
        >
          -
        </button>
        <button className="input" onClick={() => setCompteur(compteur + 1)}>
          +
        </button>
      </div>
    </div>
  );
};

export default SetFonction;
