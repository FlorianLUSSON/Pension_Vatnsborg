const express = require('express');
const router = express.Router()
const pokeModel = require("../models/pokeModel")

router.get('/', (req, res) => {
    pokeModel.find()
        .then(pokemons => res.json(pokemons)
        )
        .catch(err => {
            console.error('Erreur lors de la récupération des commandes:', err);
            res.status(500).send('Erreur serveur');
        });
});

router.post('/', (req, res) => {
    const { nomPokeFr, nomPokeEn, Nature, Talent, Egg_moves, Breedeurs } = req.body;

    const nouveauPoke = new pokeModel({
        nomPokeFr,
        nomPokeEn,
        Nature,
        Talent,
        Egg_moves,
        Breedeurs
    });

    nouveauPoke.save()
        .then(() => {
            res.status(201).json({ message: 'Pokemon pour la vente créée avec succès' });
        })
        .catch((err) => {
            console.error('Erreur lors de la création du pokemon:', err);
            res.status(500).send('Erreur serveur');
        });
});



module.exports = router