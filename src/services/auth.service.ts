import { User, IUser } from "../model/user.model";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";

dotenv.config();

export const register = async (name: string, email: string, password: string) => {
    const user = await User.create({ name, email, password });
    return generateToken(user._id as string);
};

export const login = async (email: string, password: string) => {
    const user = await User.findOne({ email });
    if (user && await user.matchPassword(password)) {
        return generateToken(user._id as string);
    } else {
        throw new Error("Invalid credentials");
    }
};

const generateToken = (id: string) => {
    return jwt.sign({ id }, process.env.JWT_SECRET as string, { expiresIn: "1d" });
};