const express = require('express');
const recipesRouter = require('./recipes/recipes_router');
const ingredientsRouter = require('./ingredients/ingredients_router');

const server = express();
server.use(express.json());
server.use('/recipes', recipesRouter);
server.use('/ingredients', ingredientsRouter);

module.exports = server;