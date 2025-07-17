const salesController = require('../controllers/salesController');

const getAllSales = async (req, res) => {
    try {
        const data = await salesController.getAllSales();
        return res.status(200).json(data);
    } catch (error) {
        console.error("Error in getAllSales Service");
        return res.status(500).json({ message: "An error occurred while retrieving sales" });
    }
}
const postSale = async (req, res) => {
    const { Date, userId } = req.body;

    if (!Date || !userId) {
        return res.status(400).json({ message: "All fields are required" });
    }
    try {
        const data = await salesController.createSale({ Date, userId });
        return res.status(200).json(data);
    } catch (error) {
        console.error("Error in postSale service", error);
        return res.status(500).json({ message: "An error occurred while creating the sale" });
    }
}

const getSaleById = async (req, res) => {
    const id = req.params.id;
    try {
        const data = await salesController.getSaleById(id);
        if (data) {
            return res.status(200).json(data);
        } else {
            return res.status(400).json({ message: "Invalid ID" });
        }
    } catch (error) {
        console.error("Error in getSaleById:", error.message);
        return res.status(500).json({ message: "Error retrieving the sale" });
    }
}

const deleteSale = async (req, res) => {
    const id = req.params.id;
    try {
        const data = await salesController.deleteSaleById(id);
        if (data) {
            return res.status(200).json({ message: "Sale deleted successfully" });
        } else {
            return res.status(400).json({ message: "Invalid ID" });
        }
    } catch (error) {
        console.error("Error in deleteSale", error);
        return res.status(500).json({ message: `Could not delete sale with ID: ${id}` });
    }
}

const updateSale = async (req, res) => {
    const id = req.params.id;
    const { Date, userId } = req.body;

    if (!Date || !userId) {
        return res.status(400).json({ message: "All fields are required" });
    }
    try {
        const data = await salesController.updateSale(id, { Date, userId });
        if (data[0] === 1) {
            return res.status(200).json({ message: "Sale updated successfully" });
        } else {
            return res.status(400).json({ message: "Invalid ID or no changes made" });
        }
    } catch (error) {
        console.error("Error in updateSale", error);
        return res.status(500).json({ message: `Could not update sale with ID: ${id}` });
    }
}

module.exports = {
    getAllSales,
    postSale,
    getSaleById,
    deleteSale,
    updateSale
};