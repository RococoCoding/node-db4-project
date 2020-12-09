
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {id: 1, 'directions': 'knead the dough', 'recipe_id': 2, 'order': 1},
        {id: 2, 'directions': 'add peps', 'recipe_id': 2, 'order': 2},
        {id: 3, 'directions': 'goul the goulash', 'recipe_id': 1, 'order': 1},
        {id: 4, 'directions': 'add chocolate', 'recipe_id': 3, 'order': 1},
        {id: 5, 'directions': 'add peanut butter', 'recipe_id': 3, 'order': 2},
        {id: 6, 'directions': 'bake forever', 'recipe_id': 3, 'order': 3},
        {id: 7, 'directions': 'add cheese', 'recipe_id': 2, 'order': 3},
      ]);
    });
};
