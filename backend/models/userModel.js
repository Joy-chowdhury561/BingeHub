import mongoose  from "mongoose";

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        minlength:3,
        maxlength:20,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minlength:6,
    },
    searchHistory:{
        type:[String],
        default:[],
        maxlength:10
    },
    saved:{
        type:[Number],
        default:[]
    },image:{
        type:String,
        default:""
    }
},{
    timestamps:true
})

const User=mongoose.model("User",userSchema);
export default User