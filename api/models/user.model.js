import mysql from "mysql2"
import dotenv from "dotenv";
dotenv.config();

const pool = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASS,
    database: process.env.DATABASE
}).promise();

export async function create_user(username, email, password) {
    await pool.query(`
    INSERT INTO test_login.user (id, username, email, password)
    VALUES (UUID_TO_BIN(UUID()), ?, ?, ?)
    `, [username, email, password]
    )};

export async function get_user(email) {
    const [rows] = await pool.query("SELECT * FROM test_login.user WHERE email = ?", [email]);
    return rows[0];
}

