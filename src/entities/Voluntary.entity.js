import { DataTypes } from "sequelize";
import { sequelize } from "../database/connection.js";
import { Donation } from "./Donation.entity.js";

export const Voluntary = sequelize.define("Voluntary", {
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
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

import("./Beneficiary.entity.js").then(({ Beneficiary }) => {
  Voluntary.belongsToMany(Beneficiary, { through: Donation });
});
