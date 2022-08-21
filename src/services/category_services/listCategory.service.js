import database from "../../database/index.js";

const listCategoryService = async (id) => {
  try {
    const category = await database.query(
      `
        SELECT * FROM categories WHERE id = $1
      `,
      [id]
    );

    return category.rows[0];
  } catch (error) {
    throw new Error(error);
  }
};

export default listCategoryService;
