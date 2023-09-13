import React, { useRef } from "react";
import { Link } from "react-router-dom";
import logo from "./nomVille2.png";
import colisee from "./coliseeProvisoire.png";
import oeuf from "./oeuf.png";
import "./accueil.css";

const Accueil = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div>
            <div id="image">
                <img src={logo} alt="Nom Vatnsborg" />
            </div>
            <div className="Accueil">
                <div id="Who">
                    <h1 className="Titre">Qui sommes nous?</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <Link to="/Pension" className="buttons" onClick={scrollToTop}>
                        <Link to="/Pension" className="decouvrir">
                            Découvrir
                        </Link>
                    </Link>
                </div>
                <div id="colisee">
                    <h1 className="Titre">Notre Colisée</h1>
                    <div className="description">
                        <img src={colisee} alt="Photo du colisée" />
                        <div className="text">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <Link to="/Pension" className="buttons" onClick={scrollToTop}>
                                <Link to="/Pension" className="decouvrir">
                                    Découvrir
                                </Link>
                            </Link>
                        </div>
                    </div>
                </div>
                <div id="pension">
                    <h1 className="Titre">Notre Pension</h1>
                    <div className="description">
                        <div className="text">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <Link to="/Pension" className="buttons" onClick={scrollToTop}>
                                <Link to="/Pension" className="decouvrir">
                                    Découvrir
                                </Link>
                            </Link>
                        </div>
                        <img src={oeuf} alt="Photo du colisée" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Accueil;
