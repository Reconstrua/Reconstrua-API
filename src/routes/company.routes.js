import { Router } from "express";
import {
  deleteCompany,
  getAllCompanies,
  getCompanyById,
  registerCompany,
  updateCompany,
} from "../controllers/company.controller.js";
import { validateCompanyRegister } from "../middlewares/validations/company/registerCompany.middleware.js";
import { handleValidationResult } from "../middlewares/validations/shared/checkValidationResult.middleware.js";
import { authAdmin } from "../middlewares/auth/authAdmin.middleware.js";
import { uuidv4Validator } from "../middlewares/validations/shared/uuidValidation.middleware.js";

export const companyRouter = Router();

companyRouter.post(
  "/",
  validateCompanyRegister,
  handleValidationResult,
  registerCompany,
);

companyRouter.get("/", authAdmin, getAllCompanies);

companyRouter.get(
  "/:id",
  authAdmin,
  uuidv4Validator,
  handleValidationResult,
  getCompanyById,
);

companyRouter.put(
  "/:id",
  authAdmin,
  uuidv4Validator,
  handleValidationResult,
  updateCompany,
);

companyRouter.delete(
  "/:id",
  authAdmin,
  uuidv4Validator,
  handleValidationResult,
  deleteCompany,
);
