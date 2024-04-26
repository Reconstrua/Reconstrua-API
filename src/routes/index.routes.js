import { Router } from "express";
import { UserRouter } from "./User.routes.js";
import { VoluntaryRouter } from "./Voluntary.routes.js";

export const router = Router();

router.use(UserRouter)
router.use(VoluntaryRouter)