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
        .string('description', 128)

        tabs
        .string('category', 128)
        .notNullable()

    })  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('tabs')
  
};
