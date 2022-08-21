import updateCategorieService from "../../services/category_services/updateCategorie.service.js";

const updateCategoryController = async (req,res) => {
    const { name } = req.body
    const {id} = req.params

    try {
        const updatedCategory = await updateCategorieService(id, name)
        return res.status(200).json(updatedCategory)
    } catch (error) {
        res.status(400).json(error.message);
    }
}



export default updateCategoryController