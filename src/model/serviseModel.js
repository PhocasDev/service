import mongoose from "mongoose";


const serviceSchema = new mongoose.Schema({
    title:{
        type:String,
        require:[true,'Please title is required']
    },
    description:{
        type:String,
        required:[true,'Enter discription']
    },
    categorys:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category"
    },
    price:{
        type:Number,
        required:[true,'Please price is required']
    },
    provider:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    createrdAt:{
        type:Date,
        default: new Date(Date.now())
    }
    
})
serviceSchema.pre(/^find/,function(next){
    this.populate({
        path:"categorys",select:"categoryName"
    }).populate({
        path:"provider",select:"names email"
    })
    
})
const Service = mongoose.model("Service",serviceSchema)
export default Service