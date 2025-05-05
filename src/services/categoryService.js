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

module.exports = {
  getAllCategory,
  createCategory,
};
