const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

//deal with CORS for API calls
const cors = require('cors');
app.use(cors({
    origin: '*'
}));

app.use(express.json()); // Pour pouvoir parser le JSON dans les requêtes
app.use(express.urlencoded({ extended: true })); // Pour pouvoir parser les données des formulaires

//Import routes
const routeCommandes = require("./routes/Commandes")
const routeListPokemon = require("./routes/ventePokemon")
const routeMember = require("./routes/Member")

mongoose.connect('mongodb://127.0.0.1:27017/Vatnsborg', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('Connexion à MongoDB établie');
    })
    .catch((error) => {
        console.error('Erreur lors de la connexion à MongoDB:', error);
    });

app.use("/commandes", routeCommandes)
app.use("/list", routeListPokemon)
app.use("/members", routeMember)

app.listen(port, () => {
    console.log(`Serveur Express démarré sur le port ${port}`);
});