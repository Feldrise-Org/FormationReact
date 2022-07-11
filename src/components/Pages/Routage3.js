import React from "react";
import RoutageEx from "../Autres/RoutageEx";
import Header from "../Header/Header";

const Routage1 = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <h2 className="title2">Ici se trouve le dernier exercice !</h2>
        <RoutageEx />
        <div className="Body">
          <div className="Item">
            <h3>Exercice</h3>
            Pour finir ce cours, je vous propose simplement d'ajouter une ou
            deux pages de votre choix à l'application que vous avez créer
            précédement. Le contenu n'est pas vraiment important, c'est juste
            pour mettre en application le routage.
            <br />
            Avec le code de la page précédente et le principe compris, vous
            devriez avoir tous les outils pour réussir ça sans problème !
          </div>
        </div>
      </div>
    </div>
  );
};

export default Routage1;
