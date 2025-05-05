const Category = require("../models/categoryModel");

// Obtener todas las categorías
const getAllCategories = async () => {
  try {
    const categories = await Category.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });
    return categories;
  } catch (error) {
    console.error("Error in getAllCategories:", error);
    throw new Error("Could not retrieve categories");
  }
};

// Obtener una categoría por ID
const getCategoryById = async (id) => {
  try {
    const category = await Category.findOne({
      where: { id },
    });
    return category;
  } catch (error) {
    console.error("Error in getCategoryById:", error);
    throw new Error(`Could not retrieve category with ID: ${id}`);
  }
};

// Crear una nueva categoría
const createCategory = async (data) => {
  try {
    const newCategory = await Category.create({
      name: data.name,
      description: data.description,
    });
    return newCategory;
  } catch (error) {
    console.error("Error in createCategory:", error);
    throw new Error("Could not create category");
  }
};

// Eliminar una categoría por ID
const deleteCategoryById = async (id) => {
  try {
    const deletedCount = await Category.destroy({
      where: { id },
    });
    return deletedCount; // devuelve cuántos registros fueron eliminados
  } catch (error) {
    console.error("Error in deleteCategoryById:", error);
    throw new Error("Could not delete category");
  }
};

module.exports = {
  getAllCategories,
  getCategoryById,
  createCategory,
  deleteCategoryById,
};
