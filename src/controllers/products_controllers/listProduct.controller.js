import listProductService from "../../services/products_services/listProduct.service.js";

const listProductController = async (req,res) => {

    const {id} = req.params

    try {
        const product = await listProductService(id)
        return res.status(200).json(product)
    } catch (error) {
        res.status(400).json(error.message)
    }
}

export default listProductController