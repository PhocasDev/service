import bcrypt from "bcrypt"
import User from "../model/userModel.js"
import jwt from "jsonwebtoken"


class Controller {
  static signUp = async (req, res) => {
    const { names, email, password, role } = req.body
    const hashPassword = bcrypt.hashSync(req.body.password, 10)
    try {
      const user = await User.create({ names, email, password: hashPassword, role })
      if (!user) {
        return res.status(404).json({ message: "user not found" })
      } else {
        return res.status(201).json({ message: "user successfuly created", user })
      }
    } catch (error) {
      return res.status(500).json({ message: `Error is ${error}` })
    }

  }

  static login = async (req, res) => {
    const { email, password } = req.body
    const user = await User.findOne({ email })
    if (!user) {
      return res.status(404).json({ message: "Invalid email" })
    } else {
      const comparePassword = bcrypt.compareSync(password, user.password)
      if (!comparePassword) {
        return res.status(404).json({ message: "Invalid password" })
      }
      else {
        const token = jwt.sign({ user: user }, process.env.SCRET_KEY, { expiresIn: "2d" })
        return res.status(201).json({ message: "Login successfuly", token })
      }
    }
  }
  static getAlluser = async (req, res) => {
    const users = await User.find()
    if (!users) {
      return res.status(404).json({ message: "All user not found" })
    } else {
      return res.status(200).json({ message: "All use are available", users })
    }
  }
  static getId = async (req, res) => {
    const Id = await User.find()
    if (!Id) {
      return res.status(404).json({ message: "All user not Id" })
    } else {
      return res.status(200).json({ message: "All id are available" })
    }
  }
  static getoneUse = async (req, res) => {
    const id = res.params.id
    const user = await User.findById(id)
    if (!user) {
      return res.status(404).json({ message: "User not found" })
    } else {
      return res.status(201).json({ message: "User successfuly retrive", user })
    }
  }
  static updateUser = async(req,res)=>{
    const id = req.params.id
    const user = await User.findByIdAndUpdate(id,res.body,{new:true})
    if (!user) {
      return res.status(404).json({ message: "User not found" })
    } else {
      return res.status(201).json({ message: "User successfuly updated", user })
    }
  }
  
}




export default Controller