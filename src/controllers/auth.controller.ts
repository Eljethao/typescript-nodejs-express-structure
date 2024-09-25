import {Request, Response} from "express";
import * as authService from "../services/auth.service";

export const registerUser = async (req: Request, res: Response) => {
    const {name, email, password} = req.body;
    try {
        const token = await authService.register(name, email, password);
        res.status(201).json({token});
    } catch (error) {
        res.status(400).json({message: (error as Error).message})
    }
}

export const loginUser = async (req: Request, res: Response) => {
    const {email, password} = req.body;
    try {
        const token = await authService.login(email, password);
        res.status(200).json({token});
    } catch (error) {
        res.status(400).json({message: (error as Error).message});
    }
}