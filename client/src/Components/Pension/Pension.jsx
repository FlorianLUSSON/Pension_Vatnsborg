import React, { useState, useEffect, useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import './pension.css';
import baner from "./coliseeProvisoire.png";
import Poke from "../CartePoke/Poke";

const Pension = () => {
    const [pokemon, setPokemon] = useState([]);
    const [poke, setPoke] = useState("");
    const navigate = useNavigate();

    const getAllPokemons = useCallback(async () => {
        const response = await fetch(`http://localhost:3000/list`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        });
        const allPokemons = await response.json();
        setPokemon(allPokemons);
    }, []);

    useEffect(() => {
        getAllPokemons();
    }, [getAllPokemons]);

    const filteredPokemon = useMemo(() => {
        return pokemon.filter(ShopPokemon =>
            ShopPokemon.nomPokeFr.toLowerCase().includes(poke.toLowerCase())
        ).sort(() => Math.random() - 0.5);
    }, [pokemon, poke]);

    const handleViewMore = (nomPokeFr) => {
        navigate(`/pokemon/${encodeURIComponent(nomPokeFr)}`);
    };

    return (
        <div className="Pension">
            <div className="top-page">
                <img src={baner} alt="Baniere Pension" />
            </div>
            <div className="search-bar-container">
                <div className="input-container">
                    <FaSearch id="Search-icon" />
                    <input
                        type="text"
                        placeholder="Rechercher un Pokemon..."
                        className="recherche"
                        onChange={(e) => setPoke(e.target.value)}
                    />
                </div>
            </div>
            <div className="poke">
                {filteredPokemon.map((ShopPokemon) => (
                    <div className="poke-item" key={ShopPokemon.id}>
                        <Poke info={ShopPokemon} onViewMore={handleViewMore} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Pension;
