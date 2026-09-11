import express from "express";
import { connectDB } from "./lib/connectDB.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/authRoutes.js";
import movieRoutes from "./routes/movieRoutes.js";
import TVroutes from "./routes/TVRoutes.js";
import searchRoutes from "./routes/searchRoutes.js";
import job from "./utils/cron.js";
import cors from "cors";
dotenv.config();
const port = process.env.PORT || 5000;
const app = express();
const allowedOrigins = [
  "https://binge-hub-ten.vercel.app"
];
app.use(
  cors({
    origin:allowedOrigins,
    credentials: true,
  }),
);
app.set("trust proxy", 1);
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(async(req,res,next)=>{
    const origin=req.headers.origin;
    if (
    origin &&
    origin !== "https://binge-hub-ten.vercel.app"
  ) {
    return res.status(403).json({
      message: "Forbidden"
    });
  }

  next();
})
app.use("/api/auth", authRoutes);
app.use("/api/movie", movieRoutes);
app.use("/api/tv", TVroutes);
app.use("/api/search", searchRoutes);
app.get("/health", (req, res) => {
  res.status(200).json("ok");
});
app.listen(port, () => {
  console.log("the server started at port:", port);
  connectDB();
  if (process.env.NODE_ENV === "production") {
    job.start();
  }
});
