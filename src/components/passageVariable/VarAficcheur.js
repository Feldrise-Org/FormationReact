import React from "react";
import { useState } from "react";

const Afficheur_de_variable = ({ instance, passage }) => {
  const [showResult, setShowResult] = useState(true);
  return (
    <div
      className="afficheur"
      style={{ display: showResult ? "block" : "none" }}
    >
      <h1 className="header">
        Composant enfant : L'afficheur de variable {"(" + instance + ")"}
      </h1>
      <h2 className="header">Vous avez fait passer la variable: {passage}</h2>
      <button
        className="masquer"
        onClick={() =>
          showResult ? setShowResult(false) : setShowResult(true)
        }
      >
        {" "}
        Masquer
      </button>
    </div>
  );
};

export default Afficheur_de_variable;
