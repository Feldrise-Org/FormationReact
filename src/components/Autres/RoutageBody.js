import React from "react";
import RoutageEx from "./RoutageEx";

const RoutageBody = () => {
  return (
    <div className="container">
      <h2 className="title2">Routage</h2>
      <div className="Body">
        <div className="Item">
          <h3>Principe</h3>
          Le routage est quelque chose que vous avez déjà implicitement utilisé
          tout le long de l'exploration de cette application ! Effectivement, au
          niveau du header, des différents liens qui vous dirigent vers d'autres
          pages, le routage est utilisé. Lorsque Nous lançons l'application
          react, l'url de base suivant le nom du site contient un simple slash
          "/". Ensuite, on peut mettre en place différents éléments interractifs
          qui vont changer cet url. En React, un composant natif est fait pour,
          c'est le composant {`<Link>`} à importer de react-router-dom.
          <br />
          Et lorsque que l'on fait du routage, notre mission est d'indiquer ce
          que l'on veut afficher, en fonction de cet url.
          <br />
          Bans l'exemple qui suit vous allez simplement pouvoir intéragir avec 3
          de ces links, qui changerons l'url de la page et changera légèrement
          son affichage.
          <br />
          Rien de bien compliqué à comprendre, le code n'est lui non plus pas
          très compliqué ! Comme le routage se fait dans App.js, vous aller
          pouvoir voir toutes les routes de l'application par la même occasion.
        </div>

        <RoutageEx />
        <div className="Item">
          <h3>Exercice</h3>
        </div>
      </div>
    </div>
  );
};

export default RoutageBody;
