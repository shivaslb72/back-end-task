const express = require('express')

const router = express()

const ProductsController = require('../app/controller/ProductsController')
const CategoryController = require('../app/controller/CategoryController')


router.get('/products', ProductsController.list)//Listing all products
router.post('/products', ProductsController.create)//creating a Product
router.get('/products/:id', ProductsController.show)//Get the perticuler product
router.delete('/products/:id', ProductsController.destroy)//Delete the slected Product
router.put('/products/:id', ProductsController.update)//Update the product Details

router.get('/category', CategoryController.list)//Listing all categories
router.post('/category', CategoryController.create)//creating a Category
router.get('/category/:id', CategoryController.show)//Get the perticuler Category
router.delete('/category/:id', CategoryController.destroy)//Delete the slected category
router.put('/category/:id', CategoryController.update)//Update the category Details



module.exports = router //Exporing Router