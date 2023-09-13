const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
    pseudo: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
    },
    talent: {
        type: String,
        required: true,
    },
    pokemon_signature: {
        type: String,
        required: false,
    },
    theme_musical: {
        type: String,
        required: false,
    },
    phrase_preferee: {
        type: String,
        required: false,
    },
    item_preferee: {
        type: String,
        required: false,
    },
    traumatisme: {
        type: String,
        required: false,
    },
    love: {
        type: String,
        required: false,
    },
    hate: {
        type: String,
        required: false,
    },
    qualites: {
        type: String,
        required: false,
    },
    defauts: {
        type: String,
        required: false,
    },
    insulte: {
        type: String,
        required: false,
    },
    passe_temps: {
        type: String,
        required: false,
    },
    objectif: {
        type: String,
        required: false,
    },
    souhait_inavouable: {
        type: String,
        required: false,
    },
});

const memberModel = mongoose.model('listmembers', memberSchema);

module.exports = memberModel;