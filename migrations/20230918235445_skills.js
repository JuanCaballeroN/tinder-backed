/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.hasTable('skills').then((exists)=>{
        if (!exists) {
            return knex.schema.createTable("skills", function(table){
                table.increments("id").primary();
                table.string("description").notNullable();                
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
