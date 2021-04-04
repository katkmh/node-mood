const port = process.env.PORT || 8080;
const morgan = require("morgan");
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const expressValidator = require("express-validator");
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");

// db
mongoose.connect(process.env.MONGO_URI,{useUnifiedTopology: true})
.then(() => console.log("DB Connected!"));

mongoose.connection.on("error", err => {
    console.log(`DB Connection Error: ${err}`);
});

// routes
const postRoutes = require("./routes/post");

// middleware (logging before)
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(expressValidator());

app.use('/', postRoutes);

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});