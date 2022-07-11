import React from "react";
import { useState } from "react";
import "./style.css";

const Compteur = (props) => {
  const { produit, removeElement } = props;
  const [compte, setCompte] = useState(0);
  return (
    <>
      <span className="CompteurSpan" onClick={() => removeElement()}>
        x
      </span>
      <h3 className="CompteurH3">
        {compte} {produit}
      </h3>
      <div className="CompteurDiv" id="boutons">
        <button
          className="InventaireButton"
          id="bouton_moins"
          onClick={() => {
            if (compte > 0) setCompte(compte - 1);
          }}
        >
          -
        </button>
        <button
          className="InventaireButton"
          id="bouton_plus"
          onClick={() => setCompte(compte + 1)}
        >
          +
        </button>
      </div>
    </>
  );
};

export default Compteur;
