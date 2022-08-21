import database from "../database/index.js";

const isThereThisProduct = async (req,res,next) => {
    const { id } = req.params

    const validProd = await database.query("SELECT * FROM products WHERE id = $1", [id])

    if(!validProd.rows[0]){
        return res.status(400).json({
            message: 'Product not found'
        })
    }

    next()
}

export default isThereThisProduct