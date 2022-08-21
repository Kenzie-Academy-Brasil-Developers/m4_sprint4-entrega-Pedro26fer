import database from "../../database/index.js";

const deleteProductService = async (id) => {
  try {
    const deletedProduct = await database.query(
      "DELETE FROM products WHERE id = $1",
      [id]
    );
    return deletedProduct;
  } catch (error) {
    throw new Error(error.message);
  }
};

export default deleteProductService;
