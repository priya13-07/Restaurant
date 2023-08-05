require("dotenv").config()

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const restaurantRouter = require('../Restaurant/routes/restaurant.route');
const dishRouter = require('../Restaurant/routes/dish.route');

app.use(bodyParser.json());
app.use(cors("*"));

app.use('/admin/restaurant', restaurantRouter);
app.use('/admin/dish', dishRouter);

app.get('/', (req,res) => {
    return res.send({
        message: "Working"
    })
})



const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`App is running on port : ${PORT}`);
})

mongoose.connect(process.env.DB_URI)
.then(() => {
    console.log("DB connected successfully.")
}).catch(err => {
    console.error("DB connection failed.")
    console.error(err)
    process.exit(1) // we use this to kill the server
});