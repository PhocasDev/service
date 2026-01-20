import service from "../model/serviseModel.js";

import Category from "../model/category.js";

class serviceController{

static createservice = async(req,res)=>{
    const categoryId = req.body.Categorys
    const category = await Category.findById({_id:categoryId})
    if(!category){
        return res.status(404).json({message:"Category not found"})
    }else{
        const userId = req.user._id
        if(!userId){
            return req.status(404).json({message:"User not found"})
        }else{
            const service = await service.create(req.body)
            if(!service){
                return res.status(404).json({message:"service not found"})
            }else{
                return res.status(202).json({message:"service successfuly created"})
            }
        }
    }
}

}

export default serviceController