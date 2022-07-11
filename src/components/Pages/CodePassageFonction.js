import React from "react";
import Header from "../Header/Header";

const CodePassageVariable = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <h2 className="title2">Afficheur du compteur</h2>
        <div className="Body">
          <div className="Item">
            <pre className="code">
              {`import React, { useState } from "react";
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
`}
            </pre>
          </div>
        </div>
        <div className="container">
          <h2 className="title2">Setteur du compteur</h2>
          <pre className="code">
            {`import React from "react";
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
`}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default CodePassageVariable;
