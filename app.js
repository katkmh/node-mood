const port = process.env.PORT || 8000;
const morgan = require("morgan");
const express = require("express");
const app = express();
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

app.use('/', postRoutes);

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});