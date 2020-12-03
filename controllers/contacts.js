const contacts = require('../data/contacts')

const list = (req, res) => res.json(contacts);
const show = (req, res) => {
    const userId = req.params.id
    for (let user of contacts) {
        if (user._id === parseInt(userId)) {
            res.json(user)
        }
    }
};
const create = (req, res) => {
    const newContact = {
        _id: contacts.length + 1,
        name: req.body.name,
        occupation: req.body.occupation,
        avitar: req.body.avitar
    };
    contacts.push(newContact);
    res.json(contacts)
};

module.exports = {
    list,
    show,
    create
};