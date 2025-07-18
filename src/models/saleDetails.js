const db = require("../config/database")
const { DataTypes } = require("sequelize")
const Sales = require("./salesModel")
const Products = require("./productModel")  

const SaleDetails = db.define("saleDetails", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    saleId: {
        type: DataTypes.UUID,
        allowNull: false,
        field: "sale_id",
        references: {
            model: Sales,
            key: "id"
        }
    },
    productId: {
        type: DataTypes.UUID,
        allowNull: false,
        field: "product_id",
        references: {
            model: Products,
            key: "id"
        }
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    subtotal: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
})

module.exports = SaleDetails