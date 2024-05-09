import { body } from "express-validator";

export const validateVoluntaryRegister = [
  // Validação de nome
  body("first_name", "O campo first_name deve ser preenchido")
    .isString()
    .withMessage("O first_name deve ser uma string")
    .trim()
    .not()
    .isEmpty()
    .isLength({ min: 3 })
    .withMessage("O tamanho mínimo do first_name é de 3 caracteres"),
  body("last_name", "O campo last_name deve ser preenchido")
    .isString()
    .withMessage("O last_name deve ser uma string")
    .trim()
    .not()
    .isEmpty()
    .isLength({ min: 3 })
    .withMessage("O tamanho mínimo do last_name é de 3 caracteres"),
  // Validação de email
  body("email", "O campo email deve ser preenchido")
    .isEmail()
    .withMessage("Email inválido")
    .normalizeEmail(),
  // Validação de telefone
  body("phone", "O campo phone deve ser preenchido")
    .isString()
    .withMessage("O phone deve ser uma string")
    .trim()
    .not()
    .isEmpty()
    .isLength({ min: 8 })
    .withMessage("O tamanho mínimo do phone é de 8 caracteres")
    .isMobilePhone("pt-BR")
    .withMessage("phone inválido"),
  // Validação de description
  body("description", "O campo description deve ser preenchido")
    .isString()
    .withMessage("O description deve ser uma string")
    .trim()
    .not()
    .isEmpty(),
];
