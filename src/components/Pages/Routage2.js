import React from "react";
import { CodeBlock, dracula } from "react-code-blocks";
import RoutageEx from "../Autres/RoutageEx";
import Header from "../Header/Header";

const Routage1 = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <h2 className="title2">Ici il y a le code !</h2>
        <RoutageEx />
        <CodeBlock
          text={`import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/Pages/HomePage";
import PassageVariablePage from "./components/Pages/PassageVariablePage";
import PassageFonctionPage from "./components/Pages/PassageFonctionPage";
import PageIntroduction from "./components/Pages/PageIntroduction";
import MiseEnPlacePage from "./components/Pages/MiseEnPlacePage";
import SommairePage from "./components/Pages/SommairePage";
import CodePassageVariable from "./components/Pages/CodePassageVariable";
import ScrollToTop from "./components/Autres/ScrollToTop";
import CodePassageFonction from "./components/Pages/CodePassageFonction";
import Stock from "./components/Pages/Stock";
import Routage from "./components/Pages/Routage";
import Routage1 from "./components/Pages/Routage1";
import Routage2 from "./components/Pages/Routage2";
import Routage3 from "./components/Pages/Routage3";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/MiseEnPlace" element={<MiseEnPlacePage />} />
        <Route path="/Introduction" element={<PageIntroduction />} />
        <Route path="/Sommaire" element={<SommairePage />} />
        <Route path="/PassageVariable" element={<PassageVariablePage />} />
        <Route path="/PassageVariableCode" element={<CodePassageVariable />} />
        <Route path="/PassageFonctionCode" element={<CodePassageFonction />} />
        <Route path="/PassageFonction" element={<PassageFonctionPage />} />
        <Route path="/PremierExercice" element={<Stock />} />
        <Route path="/Routage" element={<Routage />} />
        <Route path="/RoutagePage1" element={<Routage1 />} />
        <Route path="/RoutagePage2" element={<Routage2 />} />
        <Route path="/RoutagePage3" element={<Routage3 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

`}
          language={"jsx"}
          showLineNumbers={true}
          theme={dracula}
        />
        <CodeBlock
          text={`import React from "react";
import { Link } from "react-router-dom";

const RoutageEx = () => {
  return (
    <div className="container">
      <Link className="link" to={"/RoutagePage1"}>
        Page 1
      </Link>
      <Link className="link" to={"/RoutagePage2"}>
        Page 2
      </Link>
      <Link className="link" to={"/RoutagePage3"}>
        Page 3
      </Link>
    </div>
  );
};
export default RoutageEx;

`}
          language={"jsx"}
          showLineNumbers={true}
          theme={dracula}
        />
      </div>
    </div>
  );
};

export default Routage1;
