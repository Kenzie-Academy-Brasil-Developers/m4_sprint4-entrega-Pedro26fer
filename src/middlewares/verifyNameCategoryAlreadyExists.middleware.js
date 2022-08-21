import database from "../database/index.js";

const verifyNameCategoryAlreadyExistsMiddleware = async (req,res,next) => {

    const {name} = req.body

    const nameAlreadyExists = await database.query("SELECT * FROM categories WHERE name = $1 ", [name])

    if(nameAlreadyExists.rows[0]){
        return res.status(400).json({
            message: 'Category is already exist'
        })
    }

    next()
}

export default verifyNameCategoryAlreadyExistsMiddleware