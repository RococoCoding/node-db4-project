const db = require("../../data/dbconfig");

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions
}

function getRecipes() {
  return db('recipes');
}

function getInstructions(recipe_id) {
  return db('steps')
    .where('recipe_id', recipe_id)
    .select('directions')
    .orderBy('order');
}

function getShoppingList(recipe_id) {
  return db('recipes_ingredients as r_i')
    .join('ingredients as ing', 'r_i.ingredient_id', 'ing.id')
    .where('recipe_id', recipe_id)
    .select('ing.ingredient', 'r_i.ingredient_qty', 'r_i.ingredient_measurement')
}