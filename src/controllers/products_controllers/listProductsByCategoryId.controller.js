import listProductsByCategoryIdService from "../../services/products_services/listProductsByCategoryId.service.js";

const listProductsByCategorieIdController = async (req,res) => {
    const {id} = req.params

    try {
        const listProductsFromCategory = await listProductsByCategoryIdService(id)
        return res.json(listProductsFromCategory)
    } catch (error) {
        res.status(400).json(error.message)
    }
}

export default listProductsByCategorieIdController