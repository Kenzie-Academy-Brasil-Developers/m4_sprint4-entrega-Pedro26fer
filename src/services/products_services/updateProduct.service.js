import database from "../../database/index.js";

const updateProductService = async (id, newData) => {
  try {
    let query = "UPDATE products SET";
    const keys = Object.keys(newData);
    const values = Object.values(newData);

    keys.forEach((key, index) => {
      query += ` ${key} = \$${(index += 1)}, `;
    });

    query = query.slice(0, -2);

    query += `WHERE id = \$${(keys.length += 1)} RETURNING *`;

    const updatedProduct = await database.query(query, [...values, id]);

    return {
      message: "Product updated successfully",
      product: updatedProduct.rows[0],
    };
  } catch (error) {
    error.message;
  }
};

export default updateProductService;
