import { Sequelize, DataTypes } from "sequelize";
import { sequelize } from "../database/connection.js";
import { Donation } from './Donation.entity.js'

export const Voluntary = sequelize.define('Voluntary', {
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
    motivation: {
        type: DataTypes.TEXT,
        allowNull: false
    }
});

import('./User.entity.js')
.then(({User})=>{
    Voluntary.belongsToMany(User, {through: Donation})
})