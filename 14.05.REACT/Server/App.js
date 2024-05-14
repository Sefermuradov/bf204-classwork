const express = require("express");
let products = require("./db.js");
const { v4: uuidv4 } = require("uuid");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const port = 8585;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/products", (req, res) => {
  if (products.length > 0) {
    res.status(200).send({
      data: products,
      error: null,
      message: "succes",
    });
  } else {
    res.send({
      message: "data is emptty",
      data: null,
    });
  }
});

app.get("/products/:id", (req, res) => {
  const { id } = req.params;
  const product = products.find((item) => item.id === id);
  if (product !== undefined) {
    res.status(200).send({
      data: product,
      message: "succes",
    });
  } else {
    res.send({ message: "not found" });
  }
});

app.delete("/products/:id", (req, res) => {
  const { id } = req.params;
  const indx = products.findIndex((item) => item.id === id);
  if (indx === -1) {
    res.status(404).send({
      message: "failed to delete",
    });
  } else {
    const deletedProduct = products.splice(indx, 1);
    res.status(200).send({
      message: "deleted succesfuly",
      data: deletedProduct,
    });
  }
});

app.post("/products", (req, res) => {
  const { title, price, description, category, image } = req.body;
  console.log(req.body);
  const newProduct = {
    id: uuidv4(),
    title: title,
    price: price,
    description: description,
    category: category,
    image: image,
  };
  products.push(newProduct);
  res.send({
    data: newProduct,
    message: "succes",
  });
});
 

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
