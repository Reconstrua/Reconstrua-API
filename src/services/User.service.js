import { User } from "../entities/User.entity.js";

export class UserService {
    async createUser(first_name, last_name, email, phone, password, cep, street, neighborhood, city, state, complement, story) {
        try {
            await User.sync();

            const newUser = await User.create({ first_name, last_name, email, phone, password, cep, street, neighborhood, city, state, complement, story });

            return newUser;
        } catch (error) {
            return error;
        }
    };
    async getAllUsers() {
        try {
            const allUsers = await User.findAll();

            return allUsers;
        } catch (error) {
            return error;
        }
    };
    async editUser(id, first_name, last_name, email, phone, password, cep, street, neighborhood, city, state, complement, story) {
        try {
            const validateUsers = await User.findOne({ where: { id } });

            if (!validateUsers) {
                return `User not found!`
            }

            const updatedUser = await User.update({ first_name: first_name, last_name: last_name, email: email, phone: phone, password: password, cep: cep, street: street, neighborhood: neighborhood, city: city, state: state, complement: complement, story: story}, {where: {id}});

            return updatedUser;
        } catch (error) {
            return error;
        }
    };
    async deleteUser(id){
        try {
            const validateUsers = await User.findOne({ where: { id } });

            if (!validateUsers) {
                return `User not found!`
            }

            await User.destroy({where: {id}})
            return 'Sucess!'
        } catch (error) {
            return error
        }
    }
}