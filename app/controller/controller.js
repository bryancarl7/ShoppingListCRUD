// I'm new to Sequalize, so I wrote all the supported functions down here
// create a new item: create(object)
// find a item by id: findByPk(id)
// get all items: findAll()
// update an item by id: update(data, where: { id: id })
// remove an item: destroy(where: { id: id })
// remove all items: destroy(where: {})
// find all items by title: findAll({ where: { title: ... } })
const db = require("../models");
const listItem = db.listItem;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    // Gotta check to make sure we have the right data
    if (req.body.name && req.body.description && req.body.quantity){
        
        // Create a listItem
        const item = {
            title: req.body.name,
            description: req.body.description,
            published: req.body.quantity
        };
        console.log(item);

        // Actually save the item, should do some logging here
        listItem.create(item).then(data => {res.send(data)})
    } else {
        res.status(400).send({
            message: "Invalid Request: not all params are populated properly"
        });
    }
};

exports.findAll = (req, res) => {
    // Do some logging first, until the method is ironed out
    console.log(req);

    // Need to implement the offset and limit for pagination view 
    if (req.body.offset === undefined && req.body.limit === undefined){
        listItem.findAll().then(data => {
            if (data == null){
                res.send(404);
            } else {
                res.send(data);
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
    }
};

// TODO: updated and delete
exports.update = (req, res) => {};
exports.delete = (req, res) => {};