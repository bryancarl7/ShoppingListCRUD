const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
//const db = require("app/model");

// Setup the app to utilize the cors options and JSON parser
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Landing page
app.get("/list", (req, res) => {
    res.status(200).json({ message: "If you can see this, it worked!" });
});
  
// Need to make sure DB is ready
//db.sequelize.sync();

// Setup port, but defer to env  port if it exists
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
