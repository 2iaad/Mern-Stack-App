/**
     Arrow Function (Function Expression) in a data holder: Functions you want to store in variables, pass around, or export.
 */

import type { Request, Response } from "express";
import User from '../models/user.model.ts'
import bcrypt from "bcryptjs"

export async function signup(req: Request, res: Response) {
    const { fullName, email, password } = req.body; // This line creates three separate variables, each one takes its value Ex: email = req.body.email
    console.log("here1")
    try {
        if (password.length < 6) {
            console.log("Password too short, exiting");
            return res.status(400).json({message: "Password must be atleast 6 characters"})
        }
        
        const user = await User.findOne({email}) // looks for a document with this email inside the collection, then it return the document found || null, {email} stands for {email: ".."} its an object that we search for 
        if (user) {
            
            console.log("User error");
            return res.status(400).json({message: "User already exists"})
        }

        console.log("here2")
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        
        console.log(hashedPassword)
        const newUser = new User({
            fullName: fullName,
            email,
            password: hashedPassword
        })
        console.log(newUser)
        
    } catch (error) {
        
    }
    console.log("here3")
    return res.status(200).json({message: "GOOD!"})
}

export const login = (req: Request, res: Response) => {
    res.send("login rout")
}

export const logout = (req: Request, res: Response) => {
    res.send("logout rout")
}
