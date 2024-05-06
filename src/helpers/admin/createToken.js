import jwt from "jsonwebtoken";

export const createToken = admin => {
  const payload = {
    id: admin.id,
  };

  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "3h",
  });

  return token;
};
