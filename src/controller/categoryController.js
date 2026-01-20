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
            return res.status(200).json({message:"Get all category",date: Category})
        }
    }
    
}
export default categoryController