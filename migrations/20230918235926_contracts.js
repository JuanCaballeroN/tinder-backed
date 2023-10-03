/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.hasTable('contracts').then((exists)=>{
        if (!exists) {
            return knex.schema.createTable("contracts", function(table){
                table.increments('contract_number').primary();
                table.integer('id_user').references('id').inTable('users');
                table.integer('id_company').references('id').inTable('companys');
                table.integer('id_pay').references('id').inTable('pays');
                table.date('initial_date').notNullable();
                table.string('initial_place').notNullable();
                table.integer('contracted_time').notNullable();
                table.boolean('state').notNullable().defaultTo(false);
                table.integer('qualification').notNullable();               
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
