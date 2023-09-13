import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import "./pokemonPage.css";

const DescriptionPokemon = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { nomPokeFr } = useParams();
    const [pokemonData, setPokemonData] = useState(location.state?.pokemonData || null);
    const [allInfo, setAllInfo] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [inputData, setInputData] = useState("");

    useEffect(() => {
        console.log("Fetching Pokemon Data...");
        if (!pokemonData) {
            fetchPokemonData(nomPokeFr);
        } else {
            getAllInfo(pokemonData.nomPokeEn);
            setIsLoading(false);
        }
    }, [pokemonData, nomPokeFr]);

    const fetchPokemonData = async (nomPokeFr) => {
        try {
            const response = await fetch(
                `http://localhost:3000/list/${encodeURIComponent(nomPokeFr)}`,
                {
                    method: "GET",
                    headers: { "Content-Type": "application/json" },
                }
            );
            if (!response.ok) {
                throw new Error(`Received status ${response.status}`);
            }
            const singlePokemon = await response.json();
            setPokemonData(singlePokemon);
            console.log("Pokemon Data fetched successfully.");
        } catch (error) {
            console.error("Error fetching Pokemon Data:", error);
        }
    };

    const getAllInfo = async (nomAnglais) => {
        try {
            const response = await fetch(
                `https://pokeapi.co/api/v2/pokemon/${nomAnglais}`
            );
            if (!response.ok) {
                throw new Error(`Received status ${response.status}`);
            }
            const allInfo = await response.json();
            setAllInfo(allInfo);
            console.log("All Info fetched successfully.");
        } catch (error) {
            console.error("Error fetching All Info:", error);
        }
    };

    const makePostRequest = async () => {
        try {
            let payload = {
                pseudo: inputData,
                pokemon: pokemonData.nomPokeFr,
            };

            if (inputData) {
                let response = await fetch("http://localhost:3000/commandes", {
                    method: "POST",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(payload),
                });
                let data = await response.json();
                navigate("/thanks");
                console.log("Post Request successful. Data:", data);
            }
        } catch (error) {
            console.error("Error making Post Request:", error);
        }
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="page-description">
            <div className="top-page">
            </div>
            <div className={"pokemon-card"}>
                <div className={`gauche ${allInfo?.types?.[0]?.type?.name}`}>
                    <h1>{pokemonData.nomPokeFr}</h1>
                    <img src={allInfo?.sprites?.other?.["official-artwork"]?.front_default} alt="Image pokemon" />
                </div>
                <div className="droite">
                    <div className="info-breed">
                        <div>
                            <p className="info">Nature :</p>
                            <p className="data">{pokemonData.Nature}</p>
                        </div>
                        <div>
                            <p className="info">Talent :</p>
                            <p className="data">{pokemonData.Talent}</p>
                        </div>
                        <div>
                            <p className="info">Egg-Moves :</p>
                            <p className="data">{pokemonData.Egg_moves}</p>
                        </div>
                    </div>
                    <div className="droite-bas">
                        <div>
                            <ul>
                                <li>
                                    HP : {allInfo.stats?.[0]?.base_stat}
                                    <progress value={allInfo.stats?.[0]?.base_stat} max={200} />
                                </li>
                                <li>
                                    Attaque : {allInfo.stats?.[1]?.base_stat}
                                    <progress value={allInfo.stats?.[1]?.base_stat} max={200} />
                                </li>
                                <li>
                                    Defense : {allInfo.stats?.[2]?.base_stat}
                                    <progress value={allInfo.stats?.[2]?.base_stat} max={200} />
                                </li>
                                <li>
                                    Atq Spé : {allInfo.stats?.[3]?.base_stat}
                                    <progress value={allInfo.stats?.[3]?.base_stat} max={200} />
                                </li>
                                <li>
                                    Def Spé : {allInfo.stats?.[4]?.base_stat}
                                    <progress value={allInfo.stats?.[4]?.base_stat} max={200} />
                                </li>
                                <li>
                                    Vitesse : {allInfo.stats?.[5]?.base_stat}
                                    <progress value={allInfo.stats?.[5]?.base_stat} max={200} />
                                </li>
                            </ul>
                        </div>
                        <div className="last-info">
                            <div className="breedeur">
                                <p className="info">Breedeur :</p>
                                <p className="data">{pokemonData.Breedeurs}</p>
                            </div>
                            <div className="reservation">
                                <div className="search-bar-container">
                                    <div className="input-container">
                                        <input
                                            type="text"
                                            placeholder="Votre Pseudo..."
                                            className="Pseudo"
                                            value={inputData}
                                            onChange={e => setInputData(e.target.value)}
                                        />
                                    </div>
                                    <button onClick={makePostRequest}>Commander ce Pokemon</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DescriptionPokemon;
