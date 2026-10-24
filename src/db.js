import pg from 'pg';

const { Pool } = pg;

export const pool = new Pool({
    connectionString: process.env.DATABASE_URL
});

export async function initializeDatabase() {
    await pool.query(`
        CREATE TABLE IF NOT EXISTS products (
            id BIGINT GENERATED ALWAYS AS IDENTITY
        )
    `)
}