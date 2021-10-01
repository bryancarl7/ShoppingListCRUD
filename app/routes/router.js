module.exports = app => {
    const listItem = require("../controller/controller.js");
  
    var router = require("express").Router();
  
    // Retrieve all Tutorials
    router.get("/", listItem.findAll);
  
    router.post("/newItem", listItem.create);
  
    app.use('/shoppingList', router);
};