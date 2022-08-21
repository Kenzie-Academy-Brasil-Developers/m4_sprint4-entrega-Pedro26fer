import database from "../../database/index.js";


const listProductService = async (id) => {

    try {
        const product = await database.query(" SELECT * FROM products WHERE id = $1", [id])
        return product.rows[0]

    } catch (error) {
        throw new Error(error.message)
    }
}

export default listProductService