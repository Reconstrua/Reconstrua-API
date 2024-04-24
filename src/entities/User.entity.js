import { Sequelize, DataTypes } from "sequelize";
import { sequelize } from "../database/connection.js";
import { Donation } from "./Donation.entity.js";

export const User = sequelize.define('User', {
    id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    first_name: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    last_name: {
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
    password: {
        type: DataTypes.STRING(255),
        allowNull: false
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
    story: {
        type: DataTypes.TEXT,
        allowNull: false
    }
});

import('./Voluntary.entity.js')
.then(({Voluntary})=>{
    User.belongsToMany(Voluntary, {through: Donation})
})