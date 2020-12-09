
exports.up = function(knex) {
  return knex.schema
    .createTable('recipes', tbl => {
      tbl.increments()
      tbl.text('recipe', 128)
        .notNullable()
    })
    .createTable('ingredients', tbl => {
      tbl.increments()
      tbl.text('ingredient', 128)
        .notNullable()
    })
    .createTable('steps', tbl => {
      tbl.increments()
      tbl.text('directions', 128)
        .notNullable()
      tbl.integer('order')
        .unsigned()
        .notNullable()
      tbl.integer('recipe_id')
        .unsigned()
        .references('id').inTable('recipes')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    })
    .createTable('recipes_ingredients', tbl => {
      tbl.integer('recipe_id')
        .unsigned()
        .references('id').inTable('recipes')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      tbl.integer('ingredient_id')
        .unsigned()
        .notNullable()
        .references('id').inTable('ingredients')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      tbl.float('ingredient_qty')
        .unsigned()
      tbl.string('ingredient_measurement')
      tbl.primary(['recipe_id', 'ingredient_id'])
    })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('reps-ings')
  .dropTableIfExists('steps')
  .dropTableIfExists('ingredients')
  .dropTableIfExists('recipes');
};
