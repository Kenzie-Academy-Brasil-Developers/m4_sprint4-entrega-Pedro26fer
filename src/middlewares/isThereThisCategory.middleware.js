import database from "../database/index.js";

const isThereThisCategory = async (req,res,next) => {
    const { id } = req.params

    const validCategory = await database.query("SELECT * FROM categories WHERE id = $1", [id])

    if(!validCategory.rows[0]){
        return res.status(400).json({
            message: 'Category not found'
        })
    }

    next()
}

export default isThereThisCategory