const express = require('express');
const router = express.Router();
const recipeController = require('../contollers/recipeController');clea


/**
 * routas do App
*/

router.get('/', recipeController.homepage);
router.get('/categories', recipeController.exploreCategories);
router.get('/artigo/:id', recipeController.exploreArtigos);
router.get('/categories/:id', recipeController.exploreCategorieById);
router.post('/search', recipeController.searchArtigo);
router.get('/explore-latest', recipeController.exploreLatest);
router.get('/explore-random', recipeController.exploreRandom);
router.get('/submit-artigo', recipeController.submitArtigo);
module.exports = router;