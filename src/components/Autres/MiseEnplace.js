import React from "react";

const MiseEnplace = () => {
  return (
    <div className="container">
      <h2 className="title2">Mise En Place</h2>
      Maintenant que nous avons tous les prérequis nécessaires pour débuter
      React, on peut mettre en place notre environnement de travail.
      <div className="paragraphes">
        <div className="titlep">
          <h3>Liens utiles</h3>

          <p className="txt">
            Beaucoup de documentations utiles pour la suite peut être trouvé sur
            le{" "}
            <a
              className="linktxt"
              href="https://fr.reactjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              site de react.
            </a>
            <br />
            Si vous souhaiter apprendre à travers une vidéo je vous conseille{" "}
            <a
              className="linktxt"
              href="https://youtu.be/f0X1Tl8aHtA"
              target="_blank"
              rel="noopener noreferrer"
            >
              celle sur laquelle j'ai débuter mon apprentissage.
            </a>
            <br />
            On peut utiliser l’IDE que l’on veut mais pour la suite, le plus
            simple pour les extensions et sa console sera{" "}
            <a
              className="linktxt"
              href="https://code.visualstudio.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visual Studio Code.
            </a>
            <br />
            Il faut aussi installer{" "}
            <a
              className="linktxt"
              href=" https://nodejs.org/fr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              nodejs
            </a>{" "}
            puisque que React l'utilise.
            <br />
            Pour commencer à programmer en React, on peut utiliser{" "}
            <a
              className="linktxt"
              href="https://github.com/facebook/create-react-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Create React App
            </a>{" "}
            avec{" "}
            <a
              className="linktxt"
              href="https://create-react-app.dev/docs/getting-started/"
              target="_blank"
              rel="noopener noreferrer"
            >
              ce guide
            </a>{" "}
            pour l'utiliser.
            <br />
            Pour mieux comprendre la structure des pages en React, je vous
            invite qui ajouter l'extension{" "}
            <a
              className="linktxt"
              href=" https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chrome
            </a>{" "}
            ou{" "}
            <a
              className="linktxt"
              href="https://addons.mozilla.org/fr/firefox/addon/react-devtools/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Firefox
            </a>
          </p>
        </div>
      </div>
      <div className="paragraphes">
        <div className="titlep">
          <h3>Faciliter la programmation</h3>
          <p>
            Je vous propose quelques extensions vscode pour de
            l'auto-complétion, auto-import etc..
            <br />
            - Simple React Snippets
            <br />
            - Reactjs code snippets
            <br />- Mithril Emmet (dans settings.json ajouter
            "emmet.includeLanguages" : {"{"} "javascript" : "javascriptreact"
            {"}"}, "emmet.triggerExpansionOnTab": true)
          </p>
        </div>
        <div className="titlep">
          <h3>Commandes utiles</h3>
          <p>
            -Création d’une application : npx create-react-app appname
            <br />
            -Lancer une application : npm start
          </p>
        </div>
      </div>
    </div>
  );
};

export default MiseEnplace;
