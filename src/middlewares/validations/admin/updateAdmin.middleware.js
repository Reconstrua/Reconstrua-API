import { body } from "express-validator";

export const validateAdminUpdate = [
  // Validação de username
  body("username", "O campo username deve ser preenchido")
    .isString()
    .withMessage("O username deve ser uma string")
    .trim()
    .not()
    .isEmpty(),
  body("password").custom((value, { req }) => {
    if (value) {
      throw new Error("Não é permitido atualizar o campo password");
    }
    return true;
  }),
];
