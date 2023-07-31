const Product = require('../models/productModels');
const asyncHandler = require('express-async-handler');

// get all products
const getProducts = asyncHandler(async(req, res)=> {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
    // console.log(error.message);
    // res.status(500).json({message: error.message});
  }
})
// get single product
const getProduct = asyncHandler(async(req, res)=> {
  try {
    const {id} = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
    // console.log(error.message);
    // res.status(500).json({message: error.message});
  }
})
// create product
const createProduct = asyncHandler(async(req, res)=> {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
    // console.log(error.message);
    // res.status(500).json({message: error.message});
  }
})
// update product
const updateProduct = asyncHandler(async(req, res)=> {
  try {
    const {id} = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, {new: true});
    if(!product) {
      return res.status(404).json({message: `Cannot find any product by ${id}`});
    } 
    res.status(200).json(product);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
    // console.log(error.message);
    // res.status(500).json({message: error.message});
  }
})

const deleteProduct = asyncHandler(async(req, res)=> {
  try {
    const {id} = req.params;
    const product = await Product.findByIdAndDelete(id);
    if(!product) {
      return res.status(404).json({message: `Cannot find any product by ${id}`});
    } 
    res.status(200).json(product);
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
    // console.log(error.message);
    // res.status(500).json({message: error.message});
  }
})

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct
}