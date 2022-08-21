import createCategoryService from "../../services/category_services/createCategory.service.js";

const createCategoryController = async (req, res) => {
  const { name } = req.body;
  console.log(req.body);
  try {
    const newCategory = await createCategoryService(name);

    return res.status(201).json(newCategory);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

export default createCategoryController;
