import { Router } from "express";
import {
  deleteAdmin,
  getAllAdmins,
  loginAdmin,
  registerAdmin,
  updateAdmin,
  uptime,
} from "../controllers/admin.controller.js";
import { uuidv4Validator } from "../middlewares/validations/shared/uuidValidation.middleware.js";
import { handleValidationResult } from "../middlewares/validations/shared/checkValidationResult.middleware.js";
import { validateAdminRegister } from "../middlewares/validations/admin/registerAdmin.middleware.js";
import { authAdmin } from "../middlewares/auth/authAdmin.middleware.js";

export const adminRouter = Router();

adminRouter.post(
  "/",
  validateAdminRegister,
  handleValidationResult,
  registerAdmin,
);

adminRouter.post(
  "/login",
  validateAdminRegister,
  handleValidationResult,
  loginAdmin,
);

adminRouter.get("/", authAdmin, getAllAdmins);

adminRouter.put(
  "/:id",
  authAdmin,
  uuidv4Validator,
  handleValidationResult,
  updateAdmin,
);

adminRouter.delete(
  "/:id",
  authAdmin,
  uuidv4Validator,
  handleValidationResult,
  deleteAdmin,
);

adminRouter.get("/uptime", uptime);
