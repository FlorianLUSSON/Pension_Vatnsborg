import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaDiscord } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import "./footer.css";


const Footer = () => {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer>
            <div class="footer-content">
                <h3>Vatnsborg</h3>
                <ul class="socials">
                    <li><Link to="https://discord.gg/MranBKcR9y" className="buttons">
                        <FaDiscord />
                    </Link></li>
                    <li><Link to="https://www.linkedin.com/in/florianlusson/" className="buttons">
                        <FaLinkedin />
                    </Link></li>
                </ul>
            </div>
            <div class="footer-bottom">
                <p>copyright &copy; <a href="https://www.linkedin.com/in/florianlusson/">Florian LUSSON</a> </p>
                <div class="footer-menu">
                    <ul class="f-menu">
                        <li><Link to="/" onClick={scrollToTop} className="buttons">
                            Home
                        </Link></li>
                        <li><Link to="/Presentation" onClick={scrollToTop} className="buttons">
                            About
                        </Link></li>
                        <li><Link to="/Colisee" onClick={scrollToTop} className="buttons">
                            Colisée
                        </Link></li>
                        <li><Link to="/Pension" onClick={scrollToTop} className="buttons">
                            Pension
                        </Link></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
