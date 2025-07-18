const Products = require('../models/productModel');
const Sales = require('../models/salesModel')

const getAllSales = async () => {
    try {
        const data = await Sales.findAll();
        return data;
    } catch (error) {
        console.error("Error in getAllSales", error);
        throw new Error("Could not retrieve sales");
    }
}

const createSale = async (data) => {
  try {
    const newSale = await Sales.create({
      userId: data.userId,
    });
    return newSale;
  } catch (error) {
    console.error("Error in createSale", error);
    throw new Error("Could not create sale");
  }
};

const getSaleById = async (id) => {
    try {
        const data = await Sales.findOne({
            where: { id },
            include: [
                {
                    model: Products,
                    attributes: ['id', 'name', 'price'],
                },
            ],
        });
        return data;
    } catch (error) {
        console.error("Error in getSaleById:", error);
        throw new Error(`Could not retrieve sale with ID: ${id}`);
    }
}

const deleteSaleById = async (id) => {
    try {
        const data = await Sales.destroy({
            where: { id },
        });
        return data;
    } catch (error) {
        console.error("Error in deleteSaleById", error);
        throw new Error(`Could not delete sale with ID: ${id}`);
    }
}

const updateSale = async (id, data) => {
    try {
        const [result] = await Sales.update(data, {
            where: { id },
        });
        return result > 0;
    } catch (error) {
        console.error("Error in updateSale:", error);
        throw new Error("Could not update the sale.");
    }
}

module.exports = {
    getAllSales,
    createSale,
    getSaleById,
    deleteSaleById,
    updateSale,
};