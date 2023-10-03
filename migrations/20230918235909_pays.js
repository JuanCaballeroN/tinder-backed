/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.hasTable('pays').then((exists)=>{
        if (!exists) {
            return knex.schema.createTable("pays", function(table){
                table.increments("id").primary();
                table.integer('anticip_value').notNullable();
                table.integer('residue').notNullable();
                table.date('date_pay').notNullable();              
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
