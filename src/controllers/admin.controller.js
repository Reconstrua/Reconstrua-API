import { AdminService } from "../services/admin.service.js";

const instanceAdminService = new AdminService();

export const registerAdmin = async (req, res) => {
  const { username, password, token: providedToken } = req.body;
  await instanceAdminService.registerAdmin(username, password, providedToken);

  return res.status(201).json({
    message: "Admin cadastrado com sucesso.",
  });
};

export const loginAdmin = async (req, res) => {
  const { username, password } = req.body;

  const adminToken = await instanceAdminService.loginAdmin(username, password);

  return res.status(200).json({
    message: "Login efetuado com sucesso.",
    token: adminToken,
  });
};

export const getAllAdmins = async (req, res) => {
  const adminsList = await instanceAdminService.getAllAdmins();

  return res.status(200).json({
    admins: adminsList,
  });
};

export const updateAdmin = async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  await instanceAdminService.updateAdmin(id, body);

  return res.status(200).json({
    message: "Admin atualizado com sucesso.",
  });
};

export const deleteAdmin = async (req, res) => {
  const { id } = req.params;
  await instanceAdminService.deleteAdmin(id);

  return res.status(200).json({
    message: "Admin deletado com sucesso.",
  });
};

export const uptime = async (req, res) => {
  return res.status(200).send("Hello world!");
};
