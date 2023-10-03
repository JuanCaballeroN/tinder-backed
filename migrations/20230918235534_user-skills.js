/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.hasTable('user-skills').then((exists)=>{
        if (!exists) {
            return knex.schema.createTable("user-skills", function(table){
                table.increments('id').primary();
                table.integer('id_user').references('id').inTable('users');
                table.integer('id_skill').references('id').inTable('skills');             
            });
        }
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};
