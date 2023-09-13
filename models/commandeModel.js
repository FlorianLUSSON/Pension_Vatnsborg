const mongoose = require('mongoose');

const commandeSchema = new mongoose.Schema({
    pseudo: {
        type: String,
        required: true,
    },
    pokemon: {
        type: String,
        required: true,
    },
    quantité: {
        type: Number,
        required: false,
    },
});

const commandeModel = mongoose.model('commandes', commandeSchema);

module.exports = commandeModel;