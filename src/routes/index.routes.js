import { Router } from "express";
import { beneficiaryRouter } from "./beneficiary.routes.js";
import { adminRouter } from "./admin.routes.js";

export const router = Router();

router.use("/api/beneficiaries", beneficiaryRouter);
router.use("/api/admins", adminRouter);
