import { DataTypes } from "sequelize";
import { sequelize } from "../database/connection.js";
import { Donation } from "./Donation.entity.js";

export const Beneficiary = sequelize.define("Beneficiary", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false,
  },
  first_name: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  last_name: {
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

import("./Voluntary.entity.js").then(({ Voluntary }) => {
  Beneficiary.belongsToMany(Voluntary, { through: Donation });
});
