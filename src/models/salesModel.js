const db = require("../config/database")
const { DataTypes } = require("sequelize")
const Users = require("./userModel")

const Sales = db.define("sales", {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false
    },
    Date: {
        type: DataTypes.DATE,
        allowNull: false,
        field: "date"
    },
    userId: {
        type: DataTypes.UUID,
        allowNull: false,
        field: "userId:",
        references: {
            model: Users,
            key: "id"
        }
    },

})

module.exports = Sales;