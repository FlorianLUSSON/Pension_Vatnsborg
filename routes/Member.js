const express = require('express');
const router = express.Router()
const membersModel = require("../models/membersModel")

router.get('/', (req, res) => {
    membersModel.find()
        .then(members => res.json(members)
        )
        .catch(err => {
            console.error('Erreur lors de la récupération des commandes:', err);
            res.status(500).send('Erreur serveur');
        });
});

router.post('/', (req, res) => {
    const {
        pseudo,
        role,
        talent,
        pokemon_signature,
        theme_musical,
        phrase_preferee,
        item_preferee,
        traumatisme,
        love,
        hate,
        qualites,
        defauts,
        insulte,
        passe_temps,
        objectif,
        souhait_inavouable
    } = req.body;

    const nouveauMembre = new membersModel({
        pseudo,
        role,
        talent,
        pokemon_signature,
        theme_musical,
        phrase_preferee,
        item_preferee,
        traumatisme,
        love,
        hate,
        qualites,
        defauts,
        insulte,
        passe_temps,
        objectif,
        souhait_inavouable
    });

    nouveauMembre.save()
        .then(() => {
            res.status(201).json({ message: 'Membre créée avec succès' });
        })
        .catch((err) => {
            console.error('Erreur lors de la création du membre:', err);
            res.status(500).send('Erreur serveur');
        });
});

module.exports = router