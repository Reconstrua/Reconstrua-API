import { Sequelize, DataTypes } from "sequelize";
import { sequelize } from "../database/connection.js";

export const Company = sequelize.define('Company', {
    id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    company_name: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true
    },
    phone: {
        type: DataTypes.STRING(11),
        allowNull: false
    },
    website: {
        type: DataTypes.STRING(255)
    },
    cep: {
        type: DataTypes.STRING(8),
        allowNull: false
    },
    street: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    neighborhood: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    city: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    state: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    complement: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    service: {
        type: DataTypes.STRING(255),
        allowNull: false
    }
});