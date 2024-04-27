import { UserService } from "../services/User.service.js";

const instanceUserService = new UserService();

export const registerUser = async (req, res) => {
    const { first_name, last_name, email, phone, password, cep, street, neighborhood, city, state, complement, story } = req.body;

    const newUser = await instanceUserService.createUser(first_name, last_name, email, phone, password, cep, street, neighborhood, city, state, complement, story);

    return res.status(201).json({ newUser });
};

export const getAllUsers = async (req, res) => {
    const { } = req.body;
    const allUsers = await instanceUserService.getAllUsers();

    return res.status(200).json({ allUsers });
};

export const editUser = async (req, res) => {
    const { id } = req.params;
    const { first_name, last_name, email, phone, password, cep, street, neighborhood, city, state, complement, story } = req.body;
    const editedUser = await instanceUserService.editUser(id, first_name, last_name, email, phone, password, cep, street, neighborhood, city, state, complement, story);

    return res.status(200).json({ editedUser });
};

export const deleteUser = async (req, res) => {
    const { id } = req.params;
    const deletedUser = await instanceUserService.deleteUser(id);

    return res.status(200).json({ deletedUser });
};