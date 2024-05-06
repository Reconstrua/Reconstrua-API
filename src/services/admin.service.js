import bcrypt from "bcrypt";
import { Admin } from "../entities/Admin.entity.js";
import {
  ConflictError,
  NotFoundError,
  UnauthorizedError,
} from "../helpers/error/apiErros.js";
import { validateAdminCredentials } from "../helpers/admin/validateCredential.js";
import { createToken } from "../helpers/admin/createToken.js";

export class AdminService {
  async registerAdmin(username, password, providedToken) {
    await Admin.sync();

    const storedToken = process.env.ADMIN_CREATION_TOKEN;
    if (providedToken !== storedToken) {
      throw new UnauthorizedError("Acesso negado.");
    }

    const adminExists = await Admin.findOne({ where: { username } });
    if (adminExists) {
      throw new ConflictError("Admin já cadastrado.");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await Admin.create({
      username,
      password: hashedPassword,
    });
  }
  async getAllAdmins() {
    const adminsFound = await Admin.findAll();

    if (adminsFound.length === 0) {
      throw new NotFoundError("Admins não encontrados.");
    }

    return adminsFound;
  }

  async updateAdmin(id, body) {
    const updatedAdmin = await Admin.update(body, { where: { id } });

    if (updatedAdmin[0] === 0) {
      throw new NotFoundError("Admin não encontrado.");
    }
  }

  async deleteAdmin(id) {
    const deletedAdminCounter = await Admin.destroy({ where: { id } });

    if (deletedAdminCounter <= 0) {
      throw new NotFoundError("Admin não encontrado.");
    }
  }
}
