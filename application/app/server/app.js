const express = require("express");
const app = express();
const PORT = 5000;

//Importer le module dotenv
const dotenv = require("dotenv");
//Ajouter les variables d'environnement custom (renseignée dans un fichier .env) dans l'objet `process.env`.
dotenv.config();



//Cherche si la requête correspond à un fichier statique existant dans le répertoire spécifié.
app.use(express.static("public"));

app.listen(PORT, () => {
    console.log(`Listening on http://vlad-cirjan.vpnuser.lan:${PORT}/`);
});


module.exports = app;