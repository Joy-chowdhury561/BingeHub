import express from "express"
import { connectDB } from "./lib/connectDB.js"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import authRoutes from "./routes/authRoutes.js"
import movieRoutes from "./routes/movieRoutes.js"
import TVroutes from "./routes/TVRoutes.js"
import searchRoutes from "./routes/searchRoutes.js"
import job from "./utils/cron.js"
import path from "path"
const __dirname=path.resolve()
dotenv.config()
const port=process.env.PORT || 5000 || 7000
const app=express()
app.set("trust proxy", 1);
app.use(express.json())
app.use(cookieParser()) 
app.use(express.urlencoded({extended:true}))
app.use("/api/auth",authRoutes)
app.use("/api/movie",movieRoutes)
app.use("/api/tv",TVroutes)
app.use("/api/search",searchRoutes)
app.get("/health",(req,res)=>{
    res.status(200).json("ok")
})
if(process.env.NODE_ENV==="production"){
    app.use(express.static(path.join(__dirname,"frontend","dist")))
    app.get("/{*any}",(req,res)=>{
      res.sendFile(path.join(__dirname,"frontend","dist","index.html"))
    })
}
app.listen(port,()=>{
    console.log("the server started at port:",port);
    connectDB()
    if(process.env.NODE_ENV==="production"){
        job.start()
    }
})

