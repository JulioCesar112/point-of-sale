const productController = require("../controllers/productController");

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

const deleteProduct = async (req, res) => {
  const id = req.params.id;
  if (!id) {
    return res
      .status(404)
      .json({ message: `product with id: ${id} not found` });
  }
  try {
    const data = await productController.deleteProductById(id);
    return res.status(204).end();
  } catch (error) {
    console.error("Error en deleteUsers", err.message);
    res
      .status(500)
      .json({ message: "An error occurred while deleting the user" });
  }
};

module.exports = {
  getAllProducts,
  postProduct,
  deleteProduct,
};
