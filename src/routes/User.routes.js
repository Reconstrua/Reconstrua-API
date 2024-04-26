import { Router } from 'express'
import { deleteUser, editUser, getAllUsers, registerUser } from '../controllers/User.controller.js';

export const UserRouter = Router();

UserRouter.post('/create-user', registerUser);
UserRouter.get('/all-users', getAllUsers);
UserRouter.put('/edit-user/:id', editUser);
UserRouter.delete('/delete-user/:id', deleteUser);