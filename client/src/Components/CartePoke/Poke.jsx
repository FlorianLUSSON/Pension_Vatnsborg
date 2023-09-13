import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./poke.css";

const imageCache = {};

const Poke = (props) => {
    const [imgPoke, setImgPoke] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const controller = new AbortController();
        let ignore = false;

        const getAllImages = async () => {
            let imgUrl = '';
            if (imageCache[props.info.nomPokeEn]) {
                imgUrl = imageCache[props.info.nomPokeEn];
            } else {
                try {
                    const response = await fetch(
                        `https://pokeapi.co/api/v2/pokemon/${props.info.nomPokeEn}`,
                        {
                            method: "GET",
                            headers: { "Content-Type": "application/json" },
                            signal: controller.signal
                        }
                    );
                    const allImg = await response.json();
                    imgUrl = allImg.sprites.other["official-artwork"].front_default;
                    imageCache[props.info.nomPokeEn] = imgUrl;
                } catch (error) {
                    if (error.name === 'AbortError') return;
                    throw error;
                }
            }

            if (!ignore) {
                setImgPoke(imgUrl);
            }
        };

        getAllImages();

        return () => {
            controller.abort();
            ignore = true;
        };

    }, [props.info.nomPokeEn]);


    const handleViewMore = () => {
        navigate(`/Pension/${encodeURIComponent(props.info.nomPokeFr)}`, { state: { pokemonData: props.info } });
    };

    return (
        <div className="card">
            <div className="card-content">
                <div className="name-pic">
                    <p className="Name">{props.info.nomPokeFr}</p>
                    {imgPoke ? (
                        <img src={imgPoke} alt="image Poke" />
                    ) : (
                        <p>Chargement en cours...</p>
                    )}
                </div>
                <div className="breed">
                    <p className="Nature">Nature : {props.info.Nature}</p>
                    <p className="Talent">Talent : {props.info.Talent}</p>
                    <p className="Egg-Move">Egg-Moves : {props.info.Egg_moves}</p>
                    <p className="Breedeur">Breedeur(s) : {props.info.Breedeurs}</p>
                </div>
                <button className="buy-button" onClick={handleViewMore}>
                    Voir plus
                </button>
            </div>
        </div>
    );
};

export default Poke;
