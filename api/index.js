import express from 'express'
import { createConnection } from 'mysql';
import dotenv from 'dotenv'
dotenv.config();

const db = createConnection({
    host: process.env.env_host,
    user: process.env.env_user,
    password: process.env.env_pass,
    })

db.connect((err) => { 
    if (err) { 
      console.log("Database Connection Failed !!!", err); 
    } else { 
      console.log("connected to Database"); 
    } 
});                                  
const app = express();


app.listen(3000, () => {
    console.log('Server is running on port 3000 !!!');
    }
);