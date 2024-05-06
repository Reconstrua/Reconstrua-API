import { Router } from "express";
import { validateVoluntaryRegister } from "../middlewares/validations/voluntary/registerVoluntary.middleware.js";
import { handleValidationResult } from "../middlewares/validations/shared/checkValidationResult.middleware.js";
import {
  deleteVoluntary,
  getAllVoluntaries,
  getVoluntaryById,
  registerVoluntary,
  updateVoluntary,
} from "../controllers/voluntary.controller.js";
import { authAdmin } from "../middlewares/auth/authAdmin.middleware.js";
import { uuidv4Validator } from "../middlewares/validations/shared/uuidValidation.middleware.js";

export const voluntaryRouter = Router();

voluntaryRouter.post(
  "/",
  validateVoluntaryRegister,
  handleValidationResult,
  registerVoluntary,
);

voluntaryRouter.get("/", authAdmin, getAllVoluntaries);

voluntaryRouter.get(
  "/:id",
  authAdmin,
  uuidv4Validator,
  handleValidationResult,
  getVoluntaryById,
);

voluntaryRouter.put(
  "/:id",
  authAdmin,
  uuidv4Validator,
  handleValidationResult,
  updateVoluntary,
);

voluntaryRouter.delete(
  "/:id",
  authAdmin,
  uuidv4Validator,
  handleValidationResult,
  deleteVoluntary,
);
