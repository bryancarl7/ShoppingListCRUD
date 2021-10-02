module.exports = app => {
    // Router uses controller to map from one endpoint to the frontend
    const listItem = require("../controller/controller.js");
  
    var router = require("express").Router();
  
    router.get("/listItems", listItem.findAll);
  
    router.post("/listItem", listItem.create);
    
    router.put("/listItem/update/:title", listItem.update);

    router.delete("/listItem/:title", listItem.delete);
  
    app.use('/api', router);
};