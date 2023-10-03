/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.hasTable('companys').then((exists)=>{
        if (!exists) {
            return knex.schema.createTable("companys", function(table){
                table.increments("id").primary();
                table.string("company_name").notNullable();                
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
