import mongoose from "mongoose"
export  const connectDB=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("the database was connected out successfully");
    } catch (error) {
        console.log("the error in connecting database is",error);
        process.exit(1)
    }
}