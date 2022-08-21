import deleteCategoryService from "../../services/category_services/deleteCategory.service.js";

const deleteCategoryController = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedCategory = await deleteCategoryService(id);
    return res.status(204).json(deletedCategory);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

export default deleteCategoryController;
