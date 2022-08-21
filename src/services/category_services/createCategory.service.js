import database from "../../database/index.js";

const createCategoryService = async (category) => {
  try {
    const categoryAdded = await database.query(
      "INSERT INTO categories(name) VALUES($1) RETURNING*",
      [category]
    );
    console.log(categoryAdded.rows[0]);
    return {
      message: "Category created successfully!",
      category: categoryAdded.rows[0],
    };
  } catch (error) {
    throw new Error(error);
  }
};

export default createCategoryService;
