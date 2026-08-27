import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

export const searchMiddleWare = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;

    if (!token) {
      return next();
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.userId).select("-password");
    req.user = user;
    next();
  } catch (error) {
    console.log("Protected route auth error:", error);
    return res.status(401).json({ message: "Not authorized, invalid token." });
  }
};
