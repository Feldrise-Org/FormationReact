import React from "react";
import { useState } from "react";
import Compteur from "./Compteur";
import "./style.css";

const Inventaire = (props) => {
  const { removeElement } = props;
  const [produit, setProduit] = useState("");
  const [ajout, setAjout] = useState([]);
  const [showResults, setShowResults] = useState(true);

  const handleInput = (e) => setProduit(e.target.value);
  const handleClick = () =>
    showResults ? setShowResults(false) : setShowResults(true);

  const ajoutProduit = () => {
    if (produit) {
      setAjout((ajout) => [...ajout, produit]);
      setProduit("");
    }
  };
  return (
    <div className="inventaire">
      <span className="InventaireSpan" onClick={(e) => removeElement()}>
        x
      </span>
      <h3 className="InventaireH3">{props.inventaire}</h3>
      <form id="ajout_boisson">
        <label htmlFor="Ajouter un inventaire"></label>
        <input
          className="InventaireInput"
          value={produit}
          onChange={handleInput}
          type="text"
          id="name"
          placeholder="Produit"
        />
      </form>
      <button className="InventaireButton" onClick={ajoutProduit}>
        Ajouter
      </button>

      {showResults ? (
        <button className="InventaireButton" onClick={handleClick}>
          Cacher
        </button>
      ) : (
        <button className="InventaireButton" onClick={handleClick}>
          Afficher
        </button>
      )}
      <br />
      <ul className="InventaireUl">
        {ajout.map((elem, index) => (
          <div
            className="compteur"
            style={{ display: showResults ? "block" : "none" }}
          >
            <Compteur
              key={index}
              index={index}
              produit={ajout[index]}
              removeElement={() => {
                setAjout(ajout.filter((_, i) => i !== index));
              }}
            />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Inventaire;
