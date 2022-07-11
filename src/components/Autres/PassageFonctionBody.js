import React from "react";
import FonctionPassage from "../passageFonction/FonctionPassage";
import { Link } from "react-router-dom";

const PassageFonctionBody = () => {
  return (
    <div className="container">
      <h2 className="title2">Passage de Fonction</h2>
      <div className="Body">
        <div className="Item">
          <h3>Principe</h3>
          La passage de fonction est très similaire au passage de variable mais
          est très important à aborder.
          <br />
          En effet, comme pour le passage de variable on va se servir des props,
          mais en fournissant une fonction, on peut l'utiliser directement dans
          son enfant. Ce passage de fonction est une manière de faire "remonter"
          une variable, bien que tout se transmet normalement d'un parent à un
          enfant. Dans l'exemple qui suit nous avons :
          <br />
          -Un composant parent affichant la valeur d'un compteur
          <br />
          -Un composant enfant venant modifier l'état local du hook passé en
          prop (les deux composantes du useState)
          <br />
          Il n'y a rien de très technique à faire ça une fois que vous avez bien
          compris le passage par prop, je vous laisse donc librement consulter
          le code complet :
          <Link className="link" to={"/PassageFonctionCode"}>
            code
          </Link>
        </div>
      </div>
      <FonctionPassage />
      <div className="paragraphes">
        <div className="titlep">
          <h3>Exercice</h3>
          <p className="txt">
            Maintenant que tu as compris le principe de passage de variable et
            de fonction à travers les props, je te propose un exercice.
            L'exercice consiste en une petite application d'inventaire.
            L'application doit être capable de générer des catégories
            d'inventaire ainsi que des produits, chaque produit ayant son
            compteur.
            <br />
            Je vous met si dessous un screen de ce à quoi cela devrait
            ressembler, le style n'est pas important.
            <Link className="link" to={"/PremierExercice"}>
              Exemple exercice
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PassageFonctionBody;
