const Products = require("../models/productModel");
const Category = require("../models/categoryModel");

const getAllProducts = async () => {
  try {
    const data = await Products.findAndCountAll({
      include: [
        {
          model: Category,
        },
      ],
    });
    return data;
  } catch (error) {
    console.error("Error in getAllProduts", error);
    throw new Error("could not retrive Products");
  }
};

const createProduct = async (data) => {
  try {
    const newProduct = await Products.create({
      name: data.name,
      description: data.description,
      price: data.price,
      categoryId: data.categoryId,
    });
    return newProduct;
  } catch (error) {
    console.error("Error in createProduct", error);
  }
};
const getProductById = async (id) => {
  try {
    const data = await Products.findOne({
      where: { id },
    });
    return data;
  } catch (error) {
    console.error("Error in getProductById:", error);
    throw new Error(`Could not retrieve Product with ID: ${id}`);
  }
};
const deleteProductById = async (id) => {
  try {
    const data = await Products.destroy({
      where: { id },
    });
  } catch (error) {
    console.error("Error in deleteProductById");
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
  getProductById,
  createProduct,
  deleteProductById,
  updateProduct,
};
