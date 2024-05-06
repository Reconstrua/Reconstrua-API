import { Router } from "express";
import {
  deleteBeneficiary,
  getAllBeneficiaries,
  getBeneficiaryById,
  registerBeneficiary,
  updateBeneficiary,
} from "../controllers/beneficiary.controller.js";
import { validateBeneficiaryRegister } from "../middlewares/validations/beneficiary/registerBeneficiary.middleware.js";
import { handleValidationResult } from "../middlewares/validations/shared/checkValidationResult.middleware.js";
import { uuidv4Validator } from "../middlewares/validations/shared/uuidValidation.middleware.js";
import { authAdmin } from "../middlewares/auth/authAdmin.middleware.js";

export const beneficiaryRouter = Router();

beneficiaryRouter.post(
  "/",
  validateBeneficiaryRegister,
  handleValidationResult,
  registerBeneficiary,
);

beneficiaryRouter.get("/", getAllBeneficiaries);

beneficiaryRouter.get(
  "/:id",
  uuidv4Validator,
  handleValidationResult,
  getBeneficiaryById,
);

beneficiaryRouter.put(
  "/:id",
  authAdmin,
  uuidv4Validator,
  handleValidationResult,
  updateBeneficiary,
);

beneficiaryRouter.delete(
  "/:id",
  authAdmin,
  uuidv4Validator,
  handleValidationResult,
  deleteBeneficiary,
);
