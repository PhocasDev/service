import Category from "../model/category.js"

class categoryController {
    static createCategory = async (req, res) => {
        const category = await Category.create(req.body)
        if(!category){
            return res.status(404).json({message:"Category not created"})
        }else{
            return res.status(201).json({message:'Category successfuly created',category})
        }
    } 
    static getAllCategory = async(req,res)=>{
        const Allcategory = await Category.find()
        if(!Allcategory){
            return res.status().json({message:"Dont get all category"})
        }else{
            return res.status(200).json({message:"Get all category",Allcategory})
        }
    }

    static findOnecategory = async(req,res)=>{
        try {
            const id = req.params.id
            const category = await Category.findById(id)
            if(!category){
                return res.status(404).json({message:"Category not found"})
            }
            return res.status(200).json({message:"Category found",category})
        } catch (error) {
            return res.status(500).json({message:error.message})
        }
    }
    static deleteOnecategory = async(req,res)=>{
        try {
            const id = req.params.id
            const deletecategory = await Category.findByIdAndDelete(id)
            if(!deletecategory){
                return res.status(404).json({message:"No category deleted"})
            }else{
            return res.status(200).json({message:"Category was delete successfuly",deleteOnecategory})
            }
        } catch (error) {
            return res.status(500).json({message:"category are not deleted"})
        }
    }
    static UpdateAllcategory = async(req,res)=>{
        const id = req.params.id
        const Allcategory = await Category.findByIdAndUpdate(id,req.body, {new:true})
        if(!Allcategory){
            return res.status(404).json({message:"No category updated"})
        }else{
            return res.status(201).json({message:"Category is updated successfuly",Allcategory})
        }
    }
}
export default categoryController