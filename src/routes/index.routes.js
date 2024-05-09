import { Router } from "express";
import { beneficiaryRouter } from "./beneficiary.routes.js";
import { adminRouter } from "./admin.routes.js";
import { companyRouter } from "./company.routes.js";
import { voluntaryRouter } from "./voluntary.routes.js";

export const router = Router();

router.use("/api/beneficiaries", beneficiaryRouter);
router.use("/api/admins", adminRouter);
router.use("/api/companies", companyRouter);
router.use("/api/voluntaries", voluntaryRouter);
