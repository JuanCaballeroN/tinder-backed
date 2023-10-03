/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.hasTable('users').then((exists)=>{
        if (!exists) {
            return knex.schema.createTable("users", function(table){
                table.increments("id").primary();
                table.string("first_name").notNullable();
                table.string("last_name").notNullable();
                table.integer("fee").notNullable();
                
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
