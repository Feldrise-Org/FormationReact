import React from "react";
import Header from "../Header/Header";

const CodePassageVariable = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <h2 className="title2">Passeur de variable</h2>
        <div className="Body">
          <div className="Item">
            <pre className="code">
              {`import React, { useState } from "react";
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
`}
            </pre>
          </div>
        </div>
        <div className="container">
          <h2 className="title2">Afficheur de variable</h2>
          <pre className="code">
            {`import React from "react";
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
`}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default CodePassageVariable;
