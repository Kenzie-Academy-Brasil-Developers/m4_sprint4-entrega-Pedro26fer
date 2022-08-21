import database from "../database/index.js";

const verifyCategoryUpdatedExistsMiddleware = async (req, res, next) => {
    const {id} = req.params

    const isValidCategory = await database.query("SELECT name FROM categories WHERE id = $1", [id])

    if(!isValidCategory.rows[0]){
        return res.status(404).json({
            message: 'Category not found'
        })
    }

    next()
}

export default verifyCategoryUpdatedExistsMiddleware