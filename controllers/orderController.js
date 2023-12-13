const Order = require('../models/orderSchema'); // Adjust the path based on your project structure

const createOrder = async (req, res) => {
  try {
    const {
      customerName,
      customerPhone,
      customerEmail,
      customerAddress,
      totalAllProductAmount,
      orderedProducts,
      insideCity,
      outsideCity,
    } = req.body;

    // Validate required fields
    if (
      !customerName ||
      !customerPhone ||
      !customerAddress ||
      !totalAllProductAmount ||
      !orderedProducts ||
     
      orderedProducts.length === 0
    ) {
      return res
        .status(400)
        .json({ error: 'Some required fields are missing.' });
    }

    // Validate orderedProducts array
    for (const product of orderedProducts) {
      if (
        !product.name ||
        !product.quantity ||
        !product.productImageUrl ||
        !product.totalAmount
      ) {
        return res.status(400).json({
          error:
            'Each ordered product should have name, quantity, productImageUrl, and totalAmount defined.',
        });
      }
    }

   

    // Create the order
    const newOrder = new Order({
      customerName,
      customerPhone,
      customerEmail,
      customerAddress,
      totalAllProductAmount,
      orderedProducts,
      insideCity,
      outsideCity,
    });

    // Save the order to the database
    const savedOrder = await newOrder.save();

    res.status(201).json(savedOrder);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  createOrder,
};
