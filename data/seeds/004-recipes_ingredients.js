
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('recipes_ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes_ingredients').insert([
        { recipe_id: 1, ingredient_id: 2, ingredient_qty: 5, ingredient_measurement: null },
        { recipe_id: 2, ingredient_id: 1, ingredient_qty: 1, ingredient_measurement: 'lb' },
        { recipe_id: 2, ingredient_id: 3, ingredient_qty: 1, ingredient_measurement: 'lb' },
        { recipe_id: 2, ingredient_id: 4, ingredient_qty: 500, ingredient_measurement: 'slices' },
        { recipe_id: 3, ingredient_id: 5, ingredient_qty: 1, ingredient_measurement: 'lb' },
        { recipe_id: 3, ingredient_id: 6, ingredient_qty: 0.5, ingredient_measurement: 'lb' },
        { recipe_id: 2, ingredient_id: 2, ingredient_qty: 1, ingredient_measurement: 'can' },
      ]);
    });
};
