const mongoose = require('mongoose');

const pokeSchema = new mongoose.Schema({
    nomPokeFr: {
        type: String,
        required: true,
    },
    nomPokeEn: {
        type: String,
        required: true,
    },
    Nature: {
        type: String,
        required: true,
    },
    Talent: {
        type: String,
        required: true,
    },
    Egg_moves: {
        type: String,
        required: false,
    },
    Breedeurs: {
        type: String,
        required: false,
    }
});

const pokeModel = mongoose.model('listpokes', pokeSchema);

module.exports = pokeModel;