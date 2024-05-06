import { body } from "express-validator";

export const validateAdminRegister = [
  // Validação de username
  body("username", "O campo username deve ser preenchido")
    .isString()
    .withMessage("O username deve ser uma string")
    .trim()
    .not()
    .isEmpty(),
  // Validação de password
  body("password", "O campo password deve ser preenchido")
    .isString()
    .withMessage("O password deve ser uma string")
    .trim()
    .not()
    .isEmpty(),
];
