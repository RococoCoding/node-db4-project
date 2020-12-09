const express = require('express');
const { getRecipes, getShoppingList, getInstructions } = require('./recipes_models');

const router = express.Router();

router.get('/', (req, res) => {
  getRecipes()
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      console.log(err.message)
      res.status(500);
    })
})

router.get('/:id/list', (req, res) => {
  getShoppingList(req.params.id)
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      console.log(err.message)
      res.status(500);
    })
})

router.get('/:id/steps', (req, res) => {
  getInstructions(req.params.id)
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      console.log(err.message)
      res.status(500);
    })
})

module.exports = router;