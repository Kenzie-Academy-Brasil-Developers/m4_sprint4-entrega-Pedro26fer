import database from "../../database/index.js";

const updateCategorieService = async (id, newName) => {
    try {
        const updatedCategory = await database.query(" UPDATE categories SET name = $1 WHERE id = $2 RETURNING * ", [newName, id])
        console.log(updatedCategory)
        return {
            message: "Category updated successfully!",
            category: updatedCategory.rows[0]
          };
    } catch (error) {
        throw new Error(error.message)
    }
}

export default updateCategorieService