import database from "../../database/index.js";

const createProductService = async (name, price, category_id) => {
    try {
        const newProduct = await database.query(
            `INSERT INTO products(name,price,category_id)
                VALUES 
                ($1,$2,$3)            
                RETURNING *
            `,
            [name,price,category_id]
        )
        return {
            message: "Product created successfully!",
            product: newProduct.rows[0],
          }

    } catch (error) {
        throw new Error(error.message)
    }
}

export default createProductService