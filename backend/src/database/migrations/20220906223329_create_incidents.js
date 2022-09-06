
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function(table){
    table.increments();
    table.string('title').primary().notNullable();
    table.string('description').primary().notNullable();
    table.string('value').primary().notNullable();
    table.string('ong_id').primary().notNullable();
    table.foreign('ong_id').references('id').inTable('ongs');
  });
};

exports.down = function(knex) {
    return knex.schema.dropTable('incidents');
};
