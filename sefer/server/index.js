const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const { Schema } = mongoose;

const DB = process.env.DB_URL;
const PORT = process.env.PORT;

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

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

const menuSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  ingredient: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const Menus = mongoose.model("menus", menuSchema);

app.get("/menus", async (req, res) => {
  try {
    const menus = await Menus.find({});
    console.log(menus);
    if (menus.length > 0) {
      res.status(200).send({
        message: "succes",
        error: null,
        data: menus,
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

app.get("/menus/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const menu = await Menus.findById(id);
    if (menu != undefined) {
      res.status(200).send({
        message: "succes",
        error: null,
        data: menu,
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

app.delete("/menus/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedMenu = await Menus.findByIdAndDelete(id);
    res.status(200).send({
      message: "deleted",
      response: deletedMenu,
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
});

app.post("/menus", async (req, res) => {
  const newmenu = new Menus({ ...req.body });
  try {
    await newmenu.save();
    res.status(201).send({
      message: "posted successfully",
      data: newmenu,
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
});

app.put("/menus/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await Menus.replaceOne({ _id: id }, { ...req.body });
    const updated = await Menus.findById(id);
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
