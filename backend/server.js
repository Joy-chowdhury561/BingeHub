import express from "express"
import { connectDB } from "./lib/connectDB.js"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import authRoutes from "./routes/authRoutes.js"
import movieRoutes from "./routes/movieRoutes.js"
import TVroutes from "./routes/TVRoutes.js"
import searchRoutes from "./routes/searchRoutes.js"
dotenv.config()
const port=process.env.PORT || 5000 || 7000
const app=express()
app.use(express.json())
app.use(cookieParser()) 
app.use(express.urlencoded({extended:true}))
app.use("/api/auth",authRoutes)
app.use("/api/movie",movieRoutes)
app.use("/api/tv",TVroutes)
app.use("/api/search",searchRoutes)
app.listen(port,()=>{
    console.log("the server started at port:",port);
    connectDB()
})

