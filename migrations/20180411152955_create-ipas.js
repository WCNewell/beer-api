exports.up = function(knex, Promise) {
  return knex.schema.createTable('ipas', table => {
    table.increments();
    table.text('name');
    table.integer('abv');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('ipas');
};
