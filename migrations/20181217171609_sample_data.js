exports.up = async function(knex) {
  await knex.schema.createTable('sample_data', function(t) {
    t.increments();
    t.string('name').nullable();
    t.date('age').nullable();
    t.string('description').nullable();
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTable('sample_data');
};
