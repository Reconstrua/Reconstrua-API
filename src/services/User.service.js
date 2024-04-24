import { User } from "../entities/User.entity.js";

export class UserService {
    async CreateUser(first_name,last_name,email,phone,password,cep,street,neighborhood,city,state,complement,story){
        try {
            await User.sync();

            const newUser = await User.create({first_name,last_name,email,phone,password,cep,street,neighborhood,city,state,complement,story});

            return newUser;
        } catch (error) {
            return error
        }
    }
}