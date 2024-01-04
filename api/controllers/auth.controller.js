import bcryptjs from "bcryptjs";
import { create_user, get_user } from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const salt = bcryptjs.genSaltSync(10);
  const hash_pass = bcryptjs.hashSync(password, salt);
  try {
    await create_user(username, email, hash_pass);
    res.status(201).json("User Created Successfully!!!");
  } catch (err) {
    next(err);
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const valid_user = await get_user(email);
    console.log(valid_user);
    if (!valid_user) return next(errorHandler(404, "User does not exist"));

    const match = bcryptjs.compareSync(password, valid_user.password);
    if (!match) return next(errorHandler(404, "Incorrect Credentials"));

    const token = jwt.sign({ id: valid_user._id }, process.env.JWT_SECRET);
    const { password: pass, ...rest } = valid_user;
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json({ rest });
  } catch (err) {
    next(err);
  }
};
