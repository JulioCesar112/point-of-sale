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

const deleteProductById = async (id) => {
  try {
    const data = await Products.destroy({
      where: { id },
    });
  } catch (error) {
    console.error("Error in deleteProductById");
  }
};

module.exports = {
  getAllProducts,
  createProduct,
  deleteProductById,
};
