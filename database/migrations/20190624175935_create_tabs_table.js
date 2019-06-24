exports.up = function(knex, Promise) {
    return knex.schema.createTable('tabs', tabs => {
        tabs.increments()

        tabs
        .string('title', 255)
        .notNullable()
        .unique()

        tabs
        .string('url', 128)
        .notNullable()

        tabs
        .string('note', 128)
    })  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('tabs')
  
};
