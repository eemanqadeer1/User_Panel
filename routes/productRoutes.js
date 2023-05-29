import express from "express";
import {
  createProductController,
   deleteProductController,
   getProductController,
   getSingleProductController,
   productPhotoController,
   updateProductController,
   productCountController,
  productFiltersController,
  productListController,
} from "../controllers/productController.js";

import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import formidable from "express-formidable";

const router = express.Router();

//routes
router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductController
);
// //routes


 //get products
router.get("/get-product", getProductController);

//single product

router.get("/get-product/:slug", getSingleProductController);

//get photo
router.get("/product-photo/:pid", productPhotoController);

 //delete product
router.delete("/delete-product/:pid", deleteProductController);


//update product
router.put(
  "/update-product/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  updateProductController
);

//filter product
router.post("/product-filters", productFiltersController);

//product count
router.get("/product-count", productCountController);

//product per page
router.get("/product-list/:page", productListController);

export default router;