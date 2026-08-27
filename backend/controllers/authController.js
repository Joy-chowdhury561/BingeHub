import User from "../models/userModel.js"
import bcrypt, { hash } from "bcryptjs";
import { generateToken } from "../utils/generateToken.js";
export const signUp=async(req,res)=>{
    try {  
        const {username,email,password}=req.body;
        if(!username || !password || !email){
            return res.status(400).json({message:"All fields are required!"});
        }
        if(password.length<6 || password.length>25){
            return res.status(400).json({message:"password must be at least 6 characters or maximum 25 characters"})
        }
        const emailRegex=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if(!emailRegex.test(email)){
            return res.status(400).json({message:"Please Provide a valid email!"})
        }
        const existingUsername=await User.findOne({username})
        if(existingUsername){
            return res.status(400).json({message:"username is already taken!"})
        }
        const existingEmail=await User.findOne({email})
        if(existingEmail){
            return res.status(400).json({message:"email is already for signup!"})
        }
        const salt=await bcrypt.genSalt(10);
        const hashedPassword=await bcrypt.hash(password,salt)
        const newUser=new User({
            username,
            email,
            password:hashedPassword
        });
        if(newUser){
            await newUser.save();
            generateToken(newUser._id, res)
            return res.status(201).json({
                username:newUser.username,
                email:newUser.email
            })
        }

    } catch (error) {
        console.log("error in signup controller",error);
        return res.status(500).json({message:"internal server error"})
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required." });
        }

        const user = await User.findOne({$or:[{email},{username:email}]});
        if (!user) {
            return res.status(401).json({ message: "Invalid email or password." });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid email or password." });
        }

        generateToken(user._id, res);
        return res.status(200).json({
            username: user.username,
            email: user.email
        });
    } catch (error) {
        console.log("error in login controller", error);
        return res.status(500).json({ message: "internal server error" });
    }
}

export const getMe = async (req, res) => {
    try {
        if (!req.user) {
            return res.status(401).json({ message: "Not authorized." });
        }

        return res.status(200).json(req.user);
    } catch (error) {
        console.log("error in getMe controller", error);
        return res.status(500).json({ message: "internal server error" });
    }
}

export const logout = async (req, res) => {
    try {
        res.clearCookie("jwt", {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: true,
        });
        return res.status(200).json({ message: "Logged out successfully." });
    } catch (error) {
        console.log("error in logout controller", error);
        return res.status(500).json({ message: "internal server error" });
    }
}