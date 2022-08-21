import { Router } from "express";

import createProductsController from "../controllers/products_controllers/createProducts.controller.js";
import deleteProductController from "../controllers/products_controllers/deleteProduct.controller.js";
import listProductController from "../controllers/products_controllers/listProduct.controller.js";
import listProductsController from "../controllers/products_controllers/listProducts.controller.js";
import listProductsByCategorieIdController from "../controllers/products_controllers/listProductsByCategoryId.controller.js";
import updateProductController from "../controllers/products_controllers/updateProduct.controller.js";

import isThereThisProduct from "../middlewares/isThereThisProduct.middleware.js";
import verifyDataSentIsNullMiddleware from "../middlewares/verifyDataSentIsNull.middleware.js";

const prodRouter = Router();

prodRouter.post(
  "/products",
  verifyDataSentIsNullMiddleware,
  createProductsController
);
prodRouter.get("/products/:id", isThereThisProduct, listProductController);
prodRouter.get("/products", listProductsController);
prodRouter.patch("/products/:id", isThereThisProduct, updateProductController);
prodRouter.delete("/products/:id", isThereThisProduct, deleteProductController);
prodRouter.get("/products/category/:id", listProductsByCategorieIdController);

export default prodRouter;
