import mongoose from "mongoose";


const useSchema = new mongoose.Schema({
    names:{
        type:String,
        required:[true,"Please provide name"]
    },
    email:{
        type:string,
        required:[true,`Please provide email`],
        unique:true
    },
    password:{
        type:string,
        required:[true,`Please enter your password`],
    },
    role:{
        type:string,
        enum:[`client`,`provide`,`admin`],
        default:"client"
    },
    createdAt:{
        type:Date,
        default:new Date(Date.now())
    }
})
 const User = mongoose.model("User",useSchema)
 export default User