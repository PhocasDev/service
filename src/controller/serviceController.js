import Service from "../model/serviseModel.js"

import Category from "../model/category.js";

class serviceController {

    static createservice = async (req, res) => {
        const { title, description, categorys, price, provider } = req.body


        const category = await Category.findById(categorys)
        if (!category) {
            return res.status(404).json({ message: "Category not found" })
        } else {
            const userId = req.user?._id;
            if (!userId) {
                return res.status(404).json({ message: "User not found" })
            } else {
                let service = await Service.create({
                    title, description, categorys, price, provider: userId
                })

                service = await service.populate([

                    { path: "categorys", select: "categoryName" },
                    { path: "provider", select: "names email" },

                ]);
                return res.status(201).json({ message: "service successfuly created", service })
            }
        }
    }
    static findServises = async(req,res)=>{
        const service = await Service.find()
        if(!service){
            return res.status(404).json({message:'service not found'})
        }else{
            return res.status(200).json({message:"Service successfuly retrived",service})
        }
}
static findoneService = async(req,res)=>{
    const oneService = await Service.findOne()
    if(!oneService){
        return res.status(404).json({message:"No one servise found "})
    }else{
        return res.status(201).json({message:"One servise found well",oneService})
    }
}
}
export default serviceController