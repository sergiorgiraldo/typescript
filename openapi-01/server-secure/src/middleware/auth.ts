import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const verifyToken = (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const token = req.token;

	if (!token) {
		return res.status(401).json({ message: "No token provided" });
	}

	// Verify the token
	jwt.verify(token, "special_key", (err, decoded) => {
		if (err) {
			return res.status(401).json({ message: "Invalid token:" + token});
		}

		next();
	});
};
