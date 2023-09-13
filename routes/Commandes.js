const express = require('express');
const router = express.Router()
const commandeModel = require("../models/commandeModel")

router.get('/', (req, res) => {
    commandeModel.find()
        .then(commandes => res.json(commandes)
        )
        .catch(err => {
            console.error('Erreur lors de la récupération des commandes:', err);
            res.status(500).send('Erreur serveur');
        });
});

router.post('/', (req, res) => {
    const { pseudo, pokemon, quantité } = req.body;

    const nouvelleCommande = new commandeModel({ // Utilisez "commandeModel" au lieu de "Commande"
        pseudo,
        pokemon,
        quantité,
    });

    nouvelleCommande.save()
        .then(() => {
            res.status(201).json({ message: 'Commande créée avec succès' });
        })
        .catch((err) => {
            console.error('Erreur lors de la création de la commande:', err);
            res.status(500).send('Erreur serveur');
        });
});

module.exports = router