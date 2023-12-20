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
    INSERT INTO test_login.user (username, email, password)
    VALUES (?, ?, ?)
    `, [username, email, password]
    )};

