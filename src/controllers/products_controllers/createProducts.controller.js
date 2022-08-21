import createProductService from "../../services/products_services/createProducts.service.js";


const createProductsController = async (req,res) => {

    const {name, price, category_id} = req.body

    try {
        const createdProduct = await createProductService(name, price, category_id)

        return res.status(201).json(createdProduct)

    } catch (error) {
       return res.status(400).json(error.message)
    }
}

export default createProductsController