const salesDetails = require('../models/saleDetails');

const createSaleDetails = async (saleId, productId, quantity, price,subtotal) => {
    try {
        const addProduct = await salesDetails.create({saleId, productId,quantity,price, subtotal});
        if (!addProduct) {
            throw new Error("Failed to create sale details");
        }
        console.log("Sale details created successfully:", addProduct);
        // Optionally, you can return the created sale details
        // return addProduct;
        return addProduct;
    } catch (error) {
        console.error("Error in createSaleDetails:", error);
        throw new Error("Could not create sale details");
    }
}

module.exports = {
    createSaleDetails,
};