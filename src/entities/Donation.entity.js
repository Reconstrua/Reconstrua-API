import { Sequelize, DataTypes } from "sequelize";
import { sequelize } from "../database/connection.js";

export const Donation = sequelize.define('Donation', {
    id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    }
});