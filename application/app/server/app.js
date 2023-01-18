//Ajouter les variables d'environnement custom (renseignée dans un fichier .env) dans l'objet `process.env`.
require("dotenv").config();
const express = require("express");
const app = express();
const router = require("../routes/mainRouter");
const PORT = 5000;

//Cherche si la requête correspond à un fichier statique existant dans le répertoire spécifié.
app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", "app/views");

app.use(router);

app.listen(PORT, () => {
    console.log(`Listening on http://vlad-cirjan.vpnuser.lan:${PORT}/`);
});