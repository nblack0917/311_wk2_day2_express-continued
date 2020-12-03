const products = require('../data/products')

const list = (req, res) => res.json(products);
const show = (req, res) => {
    const productsId = req.params.id
    for (let product of products) {
        if (product._id === parseInt(productsId)) {
            res.json(product)
        }
    }
};
const create = (req, res) => {
    const newProduct = {
        _id: products.length + 1,
        name: req.body.name,
        description: req.body.description,
    };
    products.push(newProduct);
    res.json(products)
};

module.exports = {
    list,
    show,
    create
};