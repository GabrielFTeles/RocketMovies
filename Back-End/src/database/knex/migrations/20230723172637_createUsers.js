exports.up = knex => knex.schema.createTable('users', table => {
  table.increments('id');
  table.string('name').notNullable();
  table.string('email').notNullable().unique();
  table.string('password').notNullable();
  table.string('avatar').default(null);
  table.timestamp('created_at').default(knex.fn.now());
  table.timestamp('updated_at').default(knex.fn.now());
});

exports.down = knex => knex.schema.dropTable('users');
