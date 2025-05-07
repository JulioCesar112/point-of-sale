const productController = require("../controllers/productController");
const Products = require("../models/productModel");

const getAllProducts = async (req, res) => {
  try {
    const data = await productController.getAllProducts();
    return res.status(200).json(data);
  } catch (error) {
    console.error("Error in getAllProducts Service");
    return res
      .status(500)
      .json({ message: "An error occurred while retriving Products" });
  }
};

const postProduct = async (req, res) => {
  const { name, description, price, categoryId } = req.body;

  if ((!name, !description, !price, !categoryId)) {
    return res.status(400).json({ message: "All fields are require" });
  }
  try {
    const data = await productController.createProduct({
      name,
      description,
      price,
      categoryId,
    });
    return res.status(200).json(data);
  } catch (error) {
    console.error("Error in postProduct service", error);
    return res
      .status(500)
      .json({ message: "An error occurrent while create Post" });
  }
};

const getProductById = async (req, res) => {
  const id = req.params.id;
  try {
    const data = await productController.getProductById(id);
    if (data) {
      return res.status(200).json(data);
    } else {
      return res.status(400).json({ message: "Invalid ID" });
    }
  } catch (error) {
    console.error("Error in getProductById:", error.message);
    return res.status(500).json({ message: "Error retrieving the product" });
  }
};

const deleteProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const data = await productController.deleteProductById(id);
    if (data) {
      return res
        .status(200)
        .json({ message: "Your product was delete successful" });
    } else {
      return res.status(400).json({ message: "Invalid ID" });
    }
    return res.status(204).end();
  } catch (error) {
    console.error("Error en deleteUsers", err.message);
    res
      .status(500)
      .json({ message: "An error occurred while deleting the user" });
  }
};

const updateProduct = async (id, data) => {
  try {
    const [result] = await Products.update(data, {
      where: {
        id,
      },
    });
    return result > 0;
  } catch (error) {
    console.error("Error in updateProduct:", error);
    throw new Error("Could not update the Product.");
  }
};

module.exports = {
  getAllProducts,
  postProduct,
  deleteProduct,
  getProductById,
  updateProduct,
};
