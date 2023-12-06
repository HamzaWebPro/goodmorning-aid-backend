const Product = require("../models/productSchema");

async function createproduct(req, res, discount) {
  let { name, description, image, price } = req.body;

  if (!name) {
    return res.send({ error: "name is not define" });
  }
  if (!image) {
    return res.send({ error: "image is not define" });
  }
  if (!description) {
    return res.send({ error: "description is not define" });
  }
  if (!price) {
    return res.send({ error: "price is not define" });
  }

  let product = new Product({
    name,
    description,
    image,
    price,
  });

  await product.save();

  return res.send({ error: "product upload successfully" });
}

// get all products
async function allproducts(req, res) {
  let data = await Product.find({}).populate("store");
  res.send(data);
}
// delete product
async function deleteProducts(req, res) {
  let { id } = req.body;
  let data = await Product.findByIdAndDelete(id);
  res.send("product successfully deleted");
}

module.exports = { createproduct, allproducts, deleteProducts };
