const categoryController = require("../controllers/categoryController");

const getAllCategory = async (req, res) => {
  try {
    const data = await categoryController.getAllCategories();
    return res.status(200).json(data);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "An error accurred while retrueving category" });
  }
};

const createCategory = async (req, res) => {
  const { name, description } = req.body;
  if ((!name, !description)) {
    return res.status(400).json({ message: "All fields are required" });
  }
  try {
    const data = categoryController.createCategory({ name, description });
    return res.status(200).json({ message: `Category created successful` });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "An error occurred while create category" });
  }
};

const deleteCategoryById = async (req, res) => {
  const id = req.params.id;

  try {
    const data = await categoryController.deleteCategoryById(id);
    if (!data) {
      return res
        .status(404)
        .json({ message: `Category with id ${id} not found` });
    }

    return res
      .status(200)
      .json({ message: "your category was deleted successful" });
  } catch (error) {
    console.error("Erroren deleteCategory", error.message);
    return res
      .status(500)
      .json({ message: "An error occurred while deleting the user" });
  }
};

const updateCategory = async (req, res) => {
  const id = req.params.id;
  const { name, description } = req.body;

  try {
    const data = await categoryController.updateCategory(id, {
      name,
      description,
    });
    return res
      .status(200)
      .json({ message: "Your category was updated successful" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "An error occurred while updating the category" });
  }
};

module.exports = {
  getAllCategory,
  createCategory,
  deleteCategoryById,
  updateCategory,
};
