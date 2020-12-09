
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {id: 1, 'recipe': 'Goulash'},
        {id: 2, 'recipe': 'Pizza'},
        {id: 3, 'recipe': 'Fat Belly'}
      ]);
    });
};
