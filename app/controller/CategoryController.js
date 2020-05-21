const Category = require("../models/category");
//CRUD operation for Categories

//Listing all categories
module.exports.list = (req, res) => {
  Category.find()
    .then(respose => {
      res.json(respose);
    })
    .catch(err => {
      res.json(err);
    });
};

//Creating category
module.exports.create = (req, res) => {
  const body = req.body;
  const category = new Category(body);
  category
    .save()
    .then(category => {
      res.json(category);
    })
    .catch(err => {
      res.json(err);
    });
};

//Get selected category
module.exports.show = (req, res) => {
  const id = req.params.id;
  Category.findById(id)
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

//Delete selected category
module.exports.destroy = (req, res) => {
  const id = req.params.id;
  Category.findByIdAndRemove(id)
    .then(category => {
      if (category) {
        res.json(category);
      } else {
        res.json(category);
      }
    })
    .catch(err => {
      res.json(err);
    });
};

//Update selected category
module.exports.update = (req, res) => {
  const id = req.params.id;
  const body = req.body;
  Category.findByIdAndUpdate(id, body)
    .then(category => {
      if (category) {
        res.json(category);
      } else {
        res.json(category);
      }
    })
    .catch(err => {
      res.json(err);
    });
};