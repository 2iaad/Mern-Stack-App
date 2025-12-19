import express from "express"
import dotenv from "dotenv"

import authRoutes from "./routes/auth.route.ts"
import { connectDB } from "./lib/db.ts"


dotenv.config() // this need to be called inorder to use "process.env.PORT"
const PORT = process.env.PORT


const app = express();
/**
 ->  express.json() is a built-in middleware in Express.
 ->  Middleware = function that runs for every request before it reaches your route handlers.
 ->  express.json() parses incoming request bodies that are in JSON format.
 ->  It makes the data available on req.body inside your routes.
 */
app.use(express.json()) // apply middleware to every route
app.use("/api/auth", authRoutes)

/*
    Route: is the code you write on the server that defines what happens when you visite the endpoint.
    Endpoint: is a specific HTTP method + URL path that the client requests.
*/

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
    connectDB()
})