const salesDetailsController = require('../controllers/salesDetailsController');
const Products = require('../models/productModel');
const Sales = require('../models/salesModel'); // Asegúrate de importar el modelo de ventas

const createSaleDetails = async (req, res) => {
    const saleId = req.params.id;
    const { productId, quantity = 1 } = req.body;

    try {
        // 1. Validar producto
        const product = await Products.findOne({ where: { id: productId } });
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        // 2. Calcular subtotal
        if (quantity <= 0) {
            return res.status(400).json({ message: "Quantity must be greater than zero" });
        }
        const price = product.price;
        const subtotal = price * quantity;

        // 3. Validar venta
        const sale = await Sales.findByPk(saleId);
        if (!sale) {
            return res.status(404).json({ message: "Sale not found" });
        }

        // 4. Crear detalle de venta
        const newSaleDetails = await salesDetailsController.createSaleDetails(saleId, productId, quantity, price, subtotal);

        // 5. Actualizar el total de la venta
        const newTotal = sale.total + subtotal;
        await sale.update({ total: newTotal });

        return res.status(201).json(newSaleDetails);
    } catch (error) {
        console.error("Error in createSaleDetails:", error);
        return res.status(500).json({ message: "Could not create sale details" });
    }
};

module.exports = {
    createSaleDetails,
};
