import { UserService } from "../services/User.service.js";

const instanceUserService = new UserService();

export const createUser = async (req,res)=>{
    const {first_name,last_name,email,phone,password,cep,street,neighborhood,city,state,complement,story} = req.body;

    const newUser =  await instanceUserService.CreateUser(first_name,last_name,email,phone,password,cep,street,neighborhood,city,state,complement,story);
    
    return res.status(201).json({newUser});
}