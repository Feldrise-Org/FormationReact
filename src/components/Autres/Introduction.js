import React from "react";
import "./Introduction.css";

const Introduction = () => {
  return (
    <div className="container">
      <h2 className="title2">Introduction</h2>
      <div className="paragraphes">
        <div className="titlep">
          <h3>Qu'est-ce que React ?</h3>
          <p className="txt">
            React est une bibliothèque de JavaScript permettant de faire des UI
            (user interface) à partir de composants. L’intérêt de ces composants
            est de pouvoir les combiner pour créer des structures complexes
            facilement et de ne pas dupliquer inutilement du code puisque l’on
            peut appeler ces composants partout dans le code. Certains de ces
            composants sont natives à React, mais l’on peut aussi programmer ses
            propres composants pour les faire correspondre au mieux à ses
            besoins. React est idéal pour créer des SPA (single page
            application), c’est-à-dire une application qui va se charger
            entièrement quand on arrive dessus, ce qui rend très fluide
            l’expérience utilisateur car il n’y a pas de chargement entre les
            différentes pages de l’application, même quand le contenu est mis à
            jour.
          </p>
        </div>
        <div className="titlep">
          <h3>Qui utilise React ?</h3>
          <p>
            De nombreuses grandes entreprises utilisent React, on peut citer par
            exemple Netflix, Facebook ou Instagram. Plus tard nous parlerons de
            React Developer tool, qui est une extension d’aide au développer
            React. Cette extension permet, entre autres, de savoir lorsque la
            page sur laquelle nous naviguons contient, ou pas, du React. Avec
            cela, on peut se rendre compte par soit même, de la quantité
            d’entreprises utilisant React.
          </p>
        </div>
      </div>

      <h2>Avant de commencer</h2>
      <p>
        Maintenant que nous avons introduit React, il est temps de parler de ce
        qu’il faut déjà savoir avant de commencer à rentrer dans le vif du
        sujet.
      </p>
      <div className="paragraphes">
        <div className="titlep">
          <h3>Prérequis</h3>
          <p>
            Pour débuter React, il faut des connaissances de base en JavaScript,
            comme React en est une bibliothèque. Si vous avez déjà développer
            dans d’autres langages vous ne deviez pas avoir de grandes
            difficultés même si JavaScript possède des comportements déroutant
            pour certaines fonctions. Si vous n’avez pas une grande expérience
            en JavaScript je vous conseille l’article suivant :{" "}
            <a
              className="linktxt"
              href=" https://developer.mozilla.org/fr/docs/Web/JavaScript/A_re-introduction_to_JavaScript"
              target="_blank"
              rel="noopener noreferrer"
            >
              Réintroduction à JavaScript
            </a>
            <br />
            <span>
              Comme React est surtout utilisé pour du front-end, il faut aussi
              avoir des bases de HTLM/CSS, de plus que le HTML est directement
              intégré au code en React aux travers de JSX. Si vous n’êtes pas à
              l’aise avec ces technologies je vous conseille de regarder les
              liens suivants, mais dans tous les cas ce ne sera sans doute pas
              un sujet bloquant pour la suite puisque cela s’apprend
              naturellement au fur et à mesure :{" "}
            </span>
            <a
              className="linktxt"
              href="https://developer.mozilla.org/fr/docs/Learn/Getting_started_with_the_web/HTML_basics"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bases de HTML
            </a>{" "}
            et{" "}
            <a
              className="linktxt"
              href="https://developer.mozilla.org/fr/docs/Learn/Getting_started_with_the_web/CSS_basics"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bases de CSS.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
