import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

import Nav from "./Components/Header/Header.jsx";
import Accueil from "./Components/Accueil/Accueil.jsx"
import Pension from "./Components/Pension/Pension.jsx"
import DescriptionPokemon from "./Components/PokemonPage/PokemonPage";
import Footer from "./Components/Footer/Footer.jsx";
import Thanks from "./Components/Thanks/Thanks.jsx"
import ComingSoon from "./Components/ComingSoon/ComingSoon";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" exact element={<Accueil />} />
          <Route path="/Pension" exact element={<Pension />} />
          <Route path="/Pension/:nomPokeFr" element={<DescriptionPokemon />} />
          <Route path="/thanks" element={<Thanks />} />
          <Route path="/comming" element={<ComingSoon />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
