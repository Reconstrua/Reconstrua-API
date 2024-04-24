import {Router} from 'express'
import { createUser } from '../controllers/User.controller.js';

export const UserRouter = Router();

UserRouter.post('/create-user', createUser);