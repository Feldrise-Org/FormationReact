import React from "react";
import { Link } from "react-router-dom";
import "./Sommaire.css";

const Sommaire = () => {
  return (
    <div className="container">
      <h2 className="title2">Sommaire</h2>
      <div className="paragraphes">
        Maintenant que l’environnement de travail est correctement installé, on
        peut rentrer dans le vif du sujet et commencer à comprendre React. Dans
        ce guide, nous utiliserons une manière moderne de coder en React,
        utilisant des hooks, permettant d’avoir accès à des états locaux, sans
        écrire de classes.
        <br />
        Je vous propose donc d'aborder les notions de bases de React, à travers
        ces 3 petits exemples concret.
      </div>
      <div className="Body">
        <div className="Item">
          <Link className="linklittletitle" to={"/PassageVariable"}>
            Le passage de variable
          </Link>
          <br />
          Avec le passage de variable, premier exemple concret nous allons
          aborder des sujets important tels que les composants, props, hooks,
          ainsi que les keys
        </div>
        <div className="Item">
          <Link className="linklittletitle" to={"/PassageFonction"}>
            Le passage de fonction
          </Link>
          <br />
          Très similaire au passage de variable, voir quasiment identique.
          Cependant, je pense que c'est un sujet aborder car sans connaître son
          existance on peut énormement se compliquer la vie, même sur des
          petites applications React.
          <div className="Item">
            <Link className="linklittletitle" to={"/PassageVariable"}>
              Le routage
            </Link>
            <br />
            React sert principalement à faire des singles pages applications,
            c’est-à-dire que tout le front est chargé d’un coup lors du
            chargement, et pas lorsque l’on fait appel à une page en
            particulier. Cependant, le routage permet de gérer ce qui apparait
            en fonction de l’url de la page, ce qui permet d’afficher les
            éléments que l’on veut en fonction du contexte.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sommaire;
