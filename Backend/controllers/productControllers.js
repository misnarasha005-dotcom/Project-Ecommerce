const Product = require("../model/productmodel");

const productController = {
    // Create Product
    create: async (req, res) => {
        try {
            const { name, description, price, image } = req.body;

            if (!name || !description || !price || !image === undefined) {
                return res.status(400).json({
                    message: "All fields are required"
                });
            }

            const product = await Product.create({
                name,
                description,
                price,
                image
            });

            return res.status(201).json({
                message: "Product created successfully",
                product
            });

        } catch (error) {
            console.error(error);
            return res.status(500).json({
                message: "Error creating product"
            });
        }
    },

    // View Single Product
    view: async (req, res) => {
        try {
            const { id } = req.params;

            const product = await Product.findById(id);

            if (!product) {
                return res.status(404).json({
                    message: "Product not found"
                });
            }

            return res.status(200).json(product);

        } catch (error) {
            console.error(error);
            return res.status(500).json({
                message: "Error fetching product"
            });
        }
    },

    // View All Products
    viewAll: async (req, res) => {
        try {
            const products = await Product.find();

            return res.status(200).json(products);

        } catch (error) {
            console.error(error);
            return res.status(500).json({
                message: "Error fetching products"
            });
        }
    },

    // Update Product
    updateProduct: async (req, res) => {
        try {
            const { id } = req.params;

            const updatedProduct = await Product.findByIdAndUpdate(
                id,
                req.body,
                {
                    new: true,
                    runValidators: true
                }
            );

            if (!updatedProduct) {
                return res.status(404).json({
                    message: "Product not found"
                });
            }

            return res.status(200).json({
                message: "Product updated successfully",
                product: updatedProduct
            });

        } catch (error) {
            console.error(error);
            return res.status(500).json({
                message: "Error updating product"
            });
        }
    },

    // Delete Product
    deleteProduct: async (req, res) => {
        try {
            const { id } = req.params;

            console.log("Delete ID:", id);

            const product = await Product.findByIdAndDelete(id);

            if (!product) {
                return res.status(404).json({
                    message: "Product not found"
                });
            }

            return res.status(200).json({
                message: "Product deleted successfully"
            });

        } catch (error) {
            console.error("DELETE ERROR:", error);

            return res.status(500).json({
                message: "Error deleting product",
                error: error.message
            });
        }
    }


};

module.exports = productController;