import {NextFunction, Request, Response} from "express";
import jwt from "jsonwebtoken";
import {User, IUser} from "../model/user.model";

// Extend the Request type to include the user property
interface RequestWithUser extends Request {
    user?: IUser;
  }

export const protect = async (req: RequestWithUser, res: Response,  next: NextFunction) => {
    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        token = req.headers.authorization.split(" ")[1];
        try {
            const decoded: any = jwt.verify(token, process.env.JWT_SECRET as string);
            req.user = await User.findById(decoded.id).select('-password');
            next();
        }catch(error) {
            res.status(401).json({message: "Not authorized"});
        }
    }

    if(!token) {
        res.status(401).json({message: "Not authorized, no token"});
    }
};