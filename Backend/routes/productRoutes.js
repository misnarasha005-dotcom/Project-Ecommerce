const express = require("express");
const productController = require("../controllers/productControllers");
const userAuth = require("../middleware/userAuth");
const isAdmin = require("../middleware/isAdmin");

const productRoutes = express.Router();

productRoutes.post("/create",userAuth,isAdmin, productController.create);
productRoutes.get("/view/:id", productController.view);
productRoutes.get("/viewall", productController.viewAll);
productRoutes.put("/update/:id", userAuth,isAdmin,productController.updateProduct);
productRoutes.delete("/delete/:id", userAuth,isAdmin,productController.deleteProduct);

module.exports = productRoutes;