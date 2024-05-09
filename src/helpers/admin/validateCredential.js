import bcrypt from "bcrypt";
import { Admin } from "../../entities/Admin.entity.js";
import { UnauthorizedError } from "../error/apiErros.js";

export const validateAdminCredentials = async (username, password) => {
  const admin = await Admin.findOne({ where: { username } });
  if (!admin) {
    throw new UnauthorizedError("Username ou senha inválidos.");
  }

  const verifyPassword = await bcrypt.compare(password, admin.password);
  if (!verifyPassword) {
    throw new UnauthorizedError("Username ou senha inválidos.");
  }

  return admin;
};
