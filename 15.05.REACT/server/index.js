const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const products = require("../../14.05.REACT/Server/db");

require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 8000;
const DB = process.env.DB_URL;
app.use(cors());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

mongoose.connect(DB).then(
  () => {
    console.log("connected to db succesfully");
    app.listen(PORT, () => {
      console.log(`Example app listening on port ${PORT}`);
    });
  },
  (err) => {
    console.log(err);
  }
);

const { Schema } = mongoose;

const productSchema = new Schema(
  {
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
  },
  { timestamps: true }
);

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
        message: "data is empty",
        data: null,
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
  const product = await Products.findById(id);
  try {
    if (product !== undefined) {
      res.status(200).send({
        data: product,
        error: null,
        message: "success",
      });
    } else {
      res.send({
        message: "data is empty",
        data: null,
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
    const deleteProduct = await Products.findByIdAndDelete(id);
    const products = await Products.find({});
    res.status(200).send({
      message: "success",
      deleteProduct: deleteProduct,
      allProducts: products,
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
});

app.post("/products", async (req, res) => {
  const newproduct = new Products({ ...req.body });
  try {
    await newproduct.save();
    res.status(201).send({
      message: "posted successfully",
      data: newproduct,
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
    const updated = await Products.findById(id);
    res.status(201).send({
      message: "updated successfully",
      data: updated,
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
    const updated = await Products.findById(id);
    res.status(201).send({
      message: "updated successfully",
      data: updated,
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
});
