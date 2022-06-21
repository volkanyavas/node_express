import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('user', table => {
        table.increments()
        table.string('firstname')
        table.string('lastname')
        table.string('email').notNullable()
        table.string('passwordHash').notNullable()
        table.timestamp('createdAt', {useTz: false}).defaultTo(knex.fn.now())
        table.timestamp('updatedAt', {useTz: false}).defaultTo(knex.fn.now())
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('user')
}

