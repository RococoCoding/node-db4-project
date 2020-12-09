
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, 'ingredient': 'flour'},
        {id: 2, 'ingredient': 'tomato'},
        {id: 3, 'ingredient': 'cheese'},
        {id: 4, "ingredient": "peps"},
        {id: 5, 'ingredient': 'chocolate'},
        {id: 6, 'ingredient': 'peanut butter'},
      ]);
    });
};
