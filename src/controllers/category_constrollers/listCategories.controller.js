import listCategoriesService from "../../services/category_services/listCategories.service.js";

const listCategoriesController = async (req, res) => {
  try {
    const categories = await listCategoriesService();
    return res.json(categories);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export default listCategoriesController;
