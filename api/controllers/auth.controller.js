import bcryptjs from 'bcryptjs'
import { create_user } from '../models/user.model.js';

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const salt = bcryptjs.genSaltSync(10);
  const hash_pass = bcryptjs.hashSync(password, salt);
  try{
    await create_user(username, email, hash_pass);
    res.status(201).json("User Created Successfully!!!");
  } catch (err) {
    next(err);
  }
}; 
