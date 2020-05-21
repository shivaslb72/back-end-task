const Product = require("../models/product");
//CRUD operation for Products

//Listing Products
module.exports.list = (req, res) => {
  Product.find()
    .populate("category", ["_id", "name"]) // Linking category with Product
    .then(respose => {
      res.json(respose);
    })
    .catch(err => {
      res.json(err);
    });
};
//Creating Products
module.exports.create = (req, res) => {
  const body = req.body;
  const product = new Product(body);
  product
    .save()
    .then(product => {
      res.json(product);
    })
    .catch(err => {
      res.json(err);
    });
};

//Get selected Products
module.exports.show = (req, res) => {
  const id = req.params.id;
  Product.findById(id)
    .populate("category", ["_id", "name"])
    .then(category => {
      if (category) {
        res.json(category);
      } else {
        res.json({});
      }
    })
    .catch(err => {
      res.json(err);
    });
};

////Delete selected Products
module.exports.destroy = (req, res) => {
  const id = req.params.id;
  Product.findByIdAndRemove(id)
    .then(product => {
      if (product) {
        res.json(product);
      } else {
        res.json(product);
      }
    })
    .catch(err => {
      res.json(err);
    });
};
//Update selected Products
module.exports.update = (req, res) => {
  const id = req.params.id;
  const body = req.body;
  Product.findByIdAndUpdate(id, body)
    .then(product => {
      if (product) {
        res.json(product);
      } else {
        res.json(product);
      }
    })
    .catch(err => {
      res.json(err);
    });
};