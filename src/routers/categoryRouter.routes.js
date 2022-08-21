import { Router } from "express";
import deleteCategoryController from "../controllers/category_constrollers/deleteCategory.controller.js";
import createCategoryController from "../controllers/category_constrollers/createCategory.controller.js";
import listCategoriesController from "../controllers/category_constrollers/listCategories.controller.js";
import listCategoryController from "../controllers/category_constrollers/listCategory.controller.js";
import updateCategoryController from "../controllers/category_constrollers/uptadeCategory.controller.js";

import verifyNameCategoryAlreadyExistsMiddleware from "../middlewares/verifyNameCategoryAlreadyExists.middleware.js";
import verifyCategoryUpdatedExistsMiddleware from "../middlewares/verifyIfCategoryUpdatedExists.middleware.js";
import isThereThisCategory from "../middlewares/isThereThisCategory.middleware.js";

const categoryRouter = Router();

categoryRouter.post(
  "/categories",
  verifyNameCategoryAlreadyExistsMiddleware,
  createCategoryController
);
categoryRouter.get(
  "/categories/:id",
  isThereThisCategory,
  listCategoryController
);
categoryRouter.get("/categories", listCategoriesController);
categoryRouter.patch(
  "/categories/:id",
  verifyCategoryUpdatedExistsMiddleware,
  updateCategoryController
);
categoryRouter.delete(
  "/categories/:id",
  isThereThisCategory,
  deleteCategoryController
);

export default categoryRouter;
