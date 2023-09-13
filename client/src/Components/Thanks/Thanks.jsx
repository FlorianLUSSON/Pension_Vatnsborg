import React from "react";
import { useNavigate } from "react-router-dom";
import back from "./banierePoke.jpg";
import "./thanks.css";

const Thanks = () => {
    const navigate = useNavigate();

    return (
        <div className="thanks" style={{
            backgroundImage: `url(${back})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <div style={{
                backgroundColor: 'rgba(255, 255, 255, 0.7)',
                padding: 20,
                borderRadius: 25,
                textAlign: "center", // Nouveau : Centrer horizontalement le texte
            }}>
                <h1>Merci pour votre commande!</h1>
                <button onClick={() => navigate('/pension')}>
                    Retour à la Pension
                </button>
            </div>
        </div>
    );
};

export default Thanks;
