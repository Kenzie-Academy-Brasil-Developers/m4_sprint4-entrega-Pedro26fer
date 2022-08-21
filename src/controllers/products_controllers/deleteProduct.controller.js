import deleteProductService from "../../services/products_services/deleteProduct.service.js";

const deleteProductController = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedProduct = await deleteProductService(id);
    return res.status(204).json(deletedProduct);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

export default deleteProductController;
