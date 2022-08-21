import database from "../../database/index.js";

const listCategoriesService = async () => {
  try {
    const categories = await database.query("SELECT * FROM categories");
    return categories.rows;
  } catch (error) {
    throw new Error(error.message);
  }
};

export default listCategoriesService;
