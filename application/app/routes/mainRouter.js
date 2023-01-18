//Création du routeur 'PRINCIPAL'
//Il va importer tous les sous-routeurs qui vont gérer des routes spécifiques

const { Router } = require("express");

const router = Router();

//Route de la page d'accueil
router.get("/homepage", (req, res) => {
	res.render("homepage");
});

//Route de la page aide
router.get("/aide", (req, res) => {
	res.render("aide");
});

//Route de la page contact
router.get("/contact", (req, res) => {
	res.render("contact");
});

//Route de la page des droits politiques des cookies
router.get("/cookies", (req, res) => {
	res.render("cookies");
});

//Route de la page d'une liste
router.get("/liste", (req, res) => {
	res.render("liste");
});

module.exports = router;