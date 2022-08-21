import listProductsService from "../../services/products_services/listProducts.service.js"; 

const listProductsController = async (req,res) => {
    try {
        const allProducts = await listProductsService()
        return res.status(200).json(allProducts)
    } catch (error) {
        res.status(400).json(error.message)
    }
}

export default listProductsController