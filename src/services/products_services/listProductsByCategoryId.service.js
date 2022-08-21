import database from "../../database/index.js";

const listProductsByCategoryIdService = async (id) => {
  try {
    const listProductsFromCategory = await database.query(
      "SELECT p.name, p.price, c.name AS category FROM products p INNER JOIN categories c ON p.category_id = c.id WHERE c.id = $1",
      [id]
    );
    return listProductsFromCategory.rows;
  } catch (error) {
    throw new Error(error.message);
  }
};
export default listProductsByCategoryIdService;
