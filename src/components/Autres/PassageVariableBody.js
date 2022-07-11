import React from "react";
import VarPassage from "../passageVariable/VarPassage";
import { Link } from "react-router-dom";

const PassageVariableBody = () => {
  return (
    <div>
      <div className="container">
        <h2 className="title2">Passage de Variable</h2>
        <div className="Body">
          <div className="Item">
            <h3>Les composants</h3>
            Avant de rentrer dans le passage de variable, il est bon de
            comprendre un élément central de React, les composants.
            <br />
            En React, tout est un composant ! Et ici nous allons utiliser React
            de la manière la plus au goût du jour possible, donc tout sera une
            fonction, pas une classe.
            <br />
            Dans une page en React, plusieurs composants vont être appeler. Par
            exemple dans la page sur laquelle vous êtes actuellement, il y a un
            composant global pour la page, un composant pour le header du site,
            un composant pour le body, et dans le body deux composants pour la
            démonstration du passage de variable !
            <br />
            Comme vous l'avez compris, tout est composant en React ! Je vous
            invite à utiliser le React developer tool que vous avez installé
            lors de la mise en place, pour regarder un petit peu tous les
            composants utilisé un peu partout !
          </div>
          <div className="Item">
            <h3>Principe</h3>
            Ok, vous avez compris la notion de composant ! Maintenant on va
            pouvoir commencer à parler de communication entre les composants.
            <br />
            React est en topdown, c'est à dire que les composants parents
            peuvent passer des informations à leur composants enfants, et
            seulement dans ce sens là.
            <br />
            Dans l'exemple qui suit, on prend deux composants :
            <br />
            -Un composant parent, qui sera celui qui possède la variable, que
            vous aller pouvoir inscrire dans la case de texte.
            <br />
            -Un composant enfant, qui est uniquement chargé d'afficher la
            variable que son parent lui à donné.
            <br />
            Je vous invite donc à expérimenter avec ce composant, avant que l'on
            rentre plus dans le détail !
          </div>
        </div>
        <VarPassage />
        <div className="Body">
          <div className="Item">
            <h3>Props</h3>
            La notion de Props est ce qu'il y a de plus important à comprendre
            ici.
            <br />
            Effectivement, c'est à travers des props que l'on peut faire passer
            des variables du composant parent au composant enfant.
            <br />A l'appel du composant parent, il suffit de nommer une
            variable qui sera disponible du côté de l'enfant avec l'équivalent
            du côté parent pour le déclarer.
            <br />
            Ici, on fait passer deux props, "passage" qui envoit ce que l'on a
            tapé dans la zone de texte, et "instance" qui permet de numéroter
            l'enfant à l'aide de la key.
            <pre className="code">
              {`<VarAfficheur passage={passage[index]} instance={index + 1} />`}
            </pre>
            Ensuite, on peut directement récupérer ces props du côté de l'enfant
            lors de sa déclaration.
            <pre className="code">
              {`const Afficheur_de_variable = ({ instance, passage }) => {`}
            </pre>
          </div>
          <div className="Item">
            <h3>Hook</h3>
            Dans cet exemple nous utilisons aussi notre premier "Hook", le
            "usestate".
            <br />
            Sans rentrer dans les détails inutiles pour le moment, le usestate
            va permettre d'affecter un état local à notre composant.
            <br />
            Ici, on peut simplement le voir comme une variable immutable,
            modifiable seulement à travers son setteur.
            <pre className="code">
              {`  const [passage, setPassage] = useState([]);
  const [ajout, setAjout] = useState([]);`}
            </pre>
          </div>
          <div className="Item">
            <h3>Keys</h3>
            Tant que nous y sommes, nous allons aborder la notion de key tout de
            suite, ce qui vous évitera une erreur récurrente par la suite !
            <br />
            Lorsque qu'un composant en appelle un autre, donc une relation
            parent/enfant, le parent doit être capable d'identifier chacun de
            ses enfant de manière unique.
            <br />
            Même si vous ne penser appeler qu'une seule fois l'enfant comme dans
            l'exemple ci-dessus, il est important de faire une map, sinon React
            ne va pas être très content !
            <br />
            D'ailleurs, peut être que vous l'aviez remarqué, mais dans l'exemple
            d'au dessus, vous pouvez appeler autant que vous voulez le composant
            et un autre sera généré, un chiffre indique son identifiant unique,
            ici simplement un index.
            <br />
            <pre className="code">
              {`{passage.map((elem, index) => (
    <div className="Afficheur" key={index}>
      <VarAfficheur passage={passage[index]} instance={index + 1} />
    </div>
  ))}`}
            </pre>
            Pour comprendre comment tout ça s'articule, je vous invite à
            regarder :
            <Link className="link" to={"/PassageVariableCode"}>
              Code complet des deux composants
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PassageVariableBody;
