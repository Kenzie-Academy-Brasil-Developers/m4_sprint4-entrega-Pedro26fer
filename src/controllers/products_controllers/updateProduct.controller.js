import updateProductService from "../../services/products_services/updateProduct.service.js";

const updateProductController = async (req,res) => {
    const {id} = req.params
    const newData = req.body

    try {

        const newDataUser = await updateProductService(id, newData)
        return res.status(200).json(newDataUser)
        
    } catch (error) {
        res.status(400).json(error.message)
    }
}

export default updateProductController