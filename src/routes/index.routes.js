import { Router } from "express";
import { UserRouter } from "./User.routes.js";
import { VoluntaryRouter } from "./Voluntary.routes.js";
import { DonationRouter } from "./Donation.routes.js";

export const router = Router();

router.use(UserRouter)
router.use(VoluntaryRouter)
router.use(DonationRouter)