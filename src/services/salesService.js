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
  const userId = req.user.id;
    if (!userId) {
        return res.status(400).json({ message: "User ID is required" });
    }

  if (!userId) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const data = await salesController.createSale({ userId});
    return res.status(201).json(data);
  } catch (error) {
    console.error("Error in postSale controller", error);
    return res.status(500).json({ message: "An error occurred while creating the sale" });
  }
};


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
    const data = req.body;
    try {
        const result = await salesController.updateSale(id, data);
        if (result) {
            return res.status(200).json({ message: "Sale updated successfully" });
        }
        return res.status(400).json({ message: "Invalid ID or data" });
    } catch (error) {
        console.error("Error in updateSale:", error);
        return res.status(500).json({ message: "Could not update the sale." });
    }
}
const finalizeSale = async (req, res) => {
    const id = req.params.id;
    try {
        const data = await salesController.updateSale(id, { status: 'completed' });
        if (data) {
            return res.status(200).json({ message: "Sale finalized successfully" });
        } else {
            return res.status(400).json({ message: "Invalid ID" });
        }
    } catch (error) {
        console.error("Error in finalizeSale", error);
        return res.status(500).json({ message: `Could not finalize sale with ID: ${id}` });
    }
}

module.exports = {
    getAllSales,
    postSale,
    getSaleById,
    deleteSale,
    finalizeSale,
    updateSale
};