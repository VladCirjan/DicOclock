//Création du routeur 'PRINCIPAL'
//Il va importer tous les sous-routeurs qui vont gérer des routes spécifiques

const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
	res.render("index");
});

module.exports = router;