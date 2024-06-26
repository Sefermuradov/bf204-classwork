const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const DB = process.env.DB_URL;
const PORT = process.env.PORT;

mongoose.connect(DB).then(
  () => {
    console.log("connected");
    app.listen(PORT, () => {
      console.log(`Example app listening on port ${PORT}`);
    });
  },
  (err) => {
    console.log(err);
  }
);

const { Schema } = mongoose;

const productSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});
const Products = mongoose.model("Products", productSchema);

app.get("/products", async (req, res) => {
  try {
    const products = await Products.find({});
    if (products.length > 0) {
      res.status(200).send({
        data: products,
        error: null,
        message: "success",
      });
    } else {
      res.send({
        data: null,
        message: "data is empty",
      });
    }
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
});

app.get("/products/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Products.findById(id);
    if (product !== undefined) {
      res.status(200).send({
        data: product,
        error: null,
        message: "success",
      });
    } else {
      res.send({
        data: null,
        message: "data is empty",
      });
    }
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
});

app.delete("/products/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedProducts = await Products.findByIdAndDelete(id);
    res.status(200).send({
      response: deletedProducts,
      message: "deleted",
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
});

app.post("/products", async (req, res) => {
  try {
    const newProduct = new Products({ ...req.body });
    await newProduct.save();
    res.status(201).send({
      data: newProduct,
      message: "posted",
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
});

app.put("/products/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await Products.replaceOne({ _id: id }, { ...req.body });
    const updatedProducts = await Products.findById(id);
    res.status(201).send({
      data: updatedProducts,
      message: "updated",
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
});

app.patch("/products/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await Products.findByIdAndUpdate(id, { ...req.body });
    const updatedProducts = await Products.findById(id);
    res.status(201).send({
      data: updatedProducts,
      message: "updated",
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
});
