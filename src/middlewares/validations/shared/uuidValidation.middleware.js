import { param } from "express-validator";

export const uuidv4Validator = [
  param("id")
    .isUUID(4)
    .withMessage("O ID passado como parâmetro deve ser um UUIDV4 válido"),
];
