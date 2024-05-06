import { DataTypes } from "sequelize";
import { sequelize } from "../database/connection.js";

export const Company = sequelize.define("Company", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false,
  },
  company_name: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(255),
    allowNull: false,
    unique: true,
  },
  phone: {
    type: DataTypes.STRING(13),
    allowNull: false,
    unique: true,
  },
  website: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  cep: {
    type: DataTypes.STRING(9),
    allowNull: false,
  },
  street: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  neighborhood: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  city: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  state: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  address_number: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});
