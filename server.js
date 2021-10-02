const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require("fs");

//const db = require("./app/model/model.js");
// TODO: setup DB

// Setup the app to utilize the cors options and JSON parser
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Landing page
app.get("/list", (req, res) => {
    res.status(200).json({ message: "If you can see this, it worked!" });
});
  
// Need to make sure DB is ready, need to configure DB
// db.sequelize.sync();

require("./app/routes/turorial.routes")(app);

// Setup port, but defer to env  port if it exists
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
