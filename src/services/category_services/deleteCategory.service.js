import database from "../../database/index.js";

const deleteCategoryService = async (id) => {
    try {       
       const deletedCategory = await database.query("DELETE FROM categories WHERE id = $1;", [id])
       return deletedCategory
        
    } catch (error) {
        throw new Error(error.message)
    }
}

export default deleteCategoryService 