import database from "../../database/index.js";

const listProductsService = async () => {
    try {
        const allProducts = await database.query("Select * FROM products ")
        return allProducts.rows
    } catch (error) {
        throw new Error(error.message)
    }
}

export default listProductsService