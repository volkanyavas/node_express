import {join} from "path";

const migrationPath = join(__dirname, 'migrations')
const seedPath = join(__dirname, 'seeds')

export default {
    development: {
        client: "mysql2",
        connection: {
            host : '127.0.0.1',
            port : 3306,
            user : 'root',
            password : 'volkan123*',
            database : 'testproje'
        },
        migrations: {
            directory: migrationPath
        },
        seeds: {
            directory: seedPath
        }
    }
}