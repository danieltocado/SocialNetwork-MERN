const express = require("express");
const morgan = require("morgan");
const cors = require('./middlewares/cors');


//Call express
const app = express();

//Port
const PORT = process.env.PORT || 3000;

//Connection to db
require("./config/mongoose");

//Routers
const userRouter = require("./routes/users"); 

//Morgan use
app.use(morgan("dev"));

//Middlewares
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.use(cors);

//Endpoints Router
app.use("/users", userRouter);

//Server up
app.listen(PORT, () => console.log(">>> SERVER ONLINE ON PORT " + PORT + "."));