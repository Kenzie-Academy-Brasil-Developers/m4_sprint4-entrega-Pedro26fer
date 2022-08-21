import createCategoryService from "../../services/category_services/createCategory.service.js";

const createCategoryController = async (req, res) => {
  const { name } = req.body;

  if(!name){
    res.status(400).json({ message: 'Category no name'})
  }
  
  try {
    const newCategory = await createCategoryService(name);

    return res.status(201).json(newCategory);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

export default createCategoryController;
