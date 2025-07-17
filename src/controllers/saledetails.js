const db = require("../config/database");
const { DataTypes } = require("sequelize");
const users = require("./userModel");
const sales = require("./salesModel");
const Products = require("../models/productModel");


const SalesDetails = db.define("salesDetails", {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false
    },
    saleId: {
        type: DataTypes.UUID,
        allowNull: false,
        field: "saleId",
        references: {
            model: sales ,
            key: "id"
        }
    },
    productId: {
        type: DataTypes.UUID,
        allowNull: false,
        field: "productId",
        references: {
            model: Products,
            key: "id"
        }
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    subtotal: {
        type: DataTypes.FLOAT,
        allowNull: false,
        field: "subtotal"
    }
})

module.exports = SalesDetails;