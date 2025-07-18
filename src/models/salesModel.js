const db = require("../config/database")
const { DataTypes } = require("sequelize")
const Users = require("./userModel")

const Sales = db.define("sales", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    Date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    userId: {
        type: DataTypes.UUID,
        allowNull: false,
        field: "user_id" ,
        references: {
            model: Users,
            key: "id"
        }
    },
    total: {
        type: DataTypes.FLOAT,
        allowNull: true,
        defaultValue: 0.0
    },
    status: {
        type: DataTypes.ENUM("pending", "completed", "cancelled"),
        defaultValue: "pending"
    },
    
})

module.exports = Sales;