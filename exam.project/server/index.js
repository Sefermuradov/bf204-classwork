const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config()

var app = express()
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
const DB = process.env.DB_URL
const PORT = process.env.PORT

mongoose.connect(DB).then(
    () => {
        console.log("connected")
        app.listen(PORT, () => {
            console.log(`Example app listening on port ${PORT}`)
        })

    },
    err => {
        console.log(err)
    }
);

const { Schema } = mongoose;
const productsSchema = new Schema({
    image: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },

});

const Products = mongoose.model('Products', productsSchema);

app.get('/products', async (req, res) => {
    try {
        const products = await Products.find({})
        if (products.length > 0) {
            res.status(200).send({
                message: "success",
                data: products,
                error: null
            })
        } else {
            res.send({
                message: "data is empty",
                data: null
            })
        }
    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }
})

app.get('/products/:id', async (req, res) => {
    const { id } = req.params
    try {
        const product = await Products.findById(id)
        if (product !== undefined) {
            res.status(200).send({
                message: "success",
                data: product,
                error: null
            })
        } else {
            res.send({
                message: "data is empty",
                data: null
            })
        }
    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }
})

app.delete('/products/:id', async (req, res) => {
    const { id } = req.params
    try {
        const deleteproduct = await Products.findByIdAndDelete(id)
        res.status(200).send({
            response: deleteproduct,
            message: "deleted"
        })
    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }
})

app.post('/products', async (req, res) => {
    try {
        const newProduct = new Products({ ...req.body })
        await newProduct.save()
        res.status(201).send({
            message: "posted",
            data: newProduct
        })
    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }
})


app.put('/products/:id', async (req, res) => {
    const { id } = req.params
    try {
        await Products.replaceOne({ _id: id }, { ...req.body })
        const updatedProduct = await Products.findById(id)
        res.status(201).send({
            message: "updated",
            data: updatedProduct
        })
    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }
})


app.patch('/products/:id', async (req, res) => {
    const { id } = req.params
    try {
        await Products.findByIdAndUpdate(id, { ...req.body })
        const updatedProduct = await Products.findById(id)
        res.status(201).send({
            message: "updated",
            data: updatedProduct
        })
    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }
})


