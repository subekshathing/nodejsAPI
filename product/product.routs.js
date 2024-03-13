import express from "express";
import Product from "./product.model.js";

const router = express.Router();
router.post("/product/add", async (req, res) => {
  //extract new product id frpom  req body
  const newProduct = req.body;
  //add new product to db
  await Product.create(newProduct);
  //send response
  return res.status(201).send({ message: "product is added" });
});
router.get("/product/list", async (req, res) => {
  const productList = await Product.find();
  return res.status(200).send({ message: "success", products: productList });
});
export default router;
