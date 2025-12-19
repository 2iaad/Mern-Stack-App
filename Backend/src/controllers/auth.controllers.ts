/**
     Arrow Function (Function Expression) in a data holder: Functions you want to store in variables, pass around, or export.
 */

import type { Request, Response } from "express";

export function signup(req: Request, res: Response)
{
    // const fullName = req.body; // This line creates three separate variables, each one takes its value Ex: email = req.body.email
    console.log(req.body)
    // try {
        
    // } catch (error) {
        
    // }
    
    res.status(200).send('<h1>SignUp rout<h1>')
}

export const login = (req:Request, res:Response) =>
{
    res.send("login rout")
}

export const logout = (req:Request, res:Response) =>
{
    res.send("logout rout")
}
