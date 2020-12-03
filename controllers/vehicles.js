const vehicles = require('../data/vehicles')

const list = (req, res) => res.json(vehicles);
const show = (req, res) => {
    const vehicleId = req.params.id
    for (let vehicle of vehicles) {
        if (vehicle._id === parseInt(vehicleId)) {
            res.json(vehicle)
        }
    }
};
const create = (req, res) => {
    const newVehicle = {
        _id: vehicles.length + 1,
        // imgUrl: "./featured-img-3.jpg",
        year: req.body.year,
        make: req.body.make,
        model: req.body.model,
        // price: req.body.price,
        // km: req.body.km,
        // miles: req.body.miles,
        // fuel: req.body.fuel,
        // city: req.body.city,
        // isNew: req.body.isNew
    };
    vehicles.push(newVehicle);
    res.json(vehicles)
};

module.exports = {
    list,
    show,
    create
};