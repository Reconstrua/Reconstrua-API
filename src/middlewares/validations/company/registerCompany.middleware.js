import { body } from "express-validator";

export const validateCompanyRegister = [
  // Validação de nome
  body("company_name", "O campo company_name deve ser preenchido")
    .isString()
    .withMessage("O company_name deve ser uma string")
    .trim()
    .not()
    .isEmpty()
    .isLength({ min: 3 })
    .withMessage("O tamanho mínimo do company_name é de 3 caracteres"),
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
  // Validação de website
  body("website", "O campo website deve ser preenchido")
    .isURL({
      protocols: ["http", "https"],
      require_protocol: true,
      require_tld: true,
    })
    .withMessage("URL de website inválida"),
  // Validação de CEP
  body("cep", "O campo cep deve ser preenchido")
    .isString()
    .withMessage("O cep deve ser uma string")
    .trim()
    .not()
    .isEmpty()
    .isLength({ min: 9 })
    .withMessage("O tamanho mínimo do CEP é de 9 caracteres")
    .isPostalCode("BR")
    .withMessage("CEP inválido"),
  // Validação de street
  body("street", "O campo street deve ser preenchido")
    .isString()
    .withMessage("O street deve ser uma string")
    .trim()
    .not()
    .isEmpty(),
  // Validação de neighborhood
  body("neighborhood", "O campo neighborhood deve ser preenchido")
    .isString()
    .withMessage("O neighborhood deve ser uma string")
    .trim()
    .not()
    .isEmpty(),
  // Validação de city
  body("city", "O campo city deve ser preenchido")
    .isString()
    .withMessage("O city deve ser uma string")
    .trim()
    .not()
    .isEmpty(),
  // Validação de state
  body("state", "O campo state deve ser preenchido")
    .isString()
    .withMessage("O state deve ser uma string")
    .trim()
    .not()
    .isEmpty(),
  // Validação de house number
  body("address_number", "O campo address_number deve ser preenchido")
    .isLength({ max: 9 })
    .withMessage("O tamanho mínimo do address_number é de 9 caracteres")
    .isNumeric()
    .withMessage("O address_number deve ser um número")
    .isInt()
    .withMessage("O address_number deve ser um número inteiro"),
  // Validação de description
  body("description", "O campo description deve ser preenchido")
    .isString()
    .withMessage("O description deve ser uma string")
    .trim()
    .not()
    .isEmpty(),
];
