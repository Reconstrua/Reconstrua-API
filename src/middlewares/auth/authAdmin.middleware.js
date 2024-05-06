import jwt from "jsonwebtoken";
import { UnauthorizedError, forbiddenError } from "../../helpers/error/apiErros.js";
import { Admin } from "../../entities/Admin.entity.js";

export const authAdmin = async (req, res, next) => {
  const token = getTokenFromHeader(req.headers.authorization);
  const decodedToken = verifyToken(token);
  await findAdminById(decodedToken.id);
  setRequestToken(req, decodedToken);
  next();
};

const getTokenFromHeader = authorizationHeader => {
  if (!authorizationHeader) {
    throw new UnauthorizedError("Token de autenticação não fornecido.");
  }

  const token = authorizationHeader.split(" ")[1];

  if (!token) {
    throw new UnauthorizedError("Token de autenticação não fornecido.");
  }
  return token;
};

const verifyToken = token => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    if (error instanceof jwt.JsonWebTokenError) {
      throw new UnauthorizedError("Token inválido.");
    }
    throw error;
  }
};

const findAdminById = async id => {
  const admin = await Admin.findOne({ where: { id } });
  if (!admin) {
    throw new forbiddenError("Acesso negado, não existe admin com esse token.");
  }
  return admin;
};

const setRequestToken = (req, decodedToken) => {
  req.decodedToken = decodedToken;
};
