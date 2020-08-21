const express = require("express");
const fileUpload = require("express-fileupload");
const morgan = require("morgan");
const cors = require('./middlewares/cors');


//Call express
const app = express();

app.use(fileUpload())

//Port
const PORT = process.env.PORT || 3000;

//Connection to db
require("./config/mongoose");

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
  
//Routers
const userRouter = require("./routes/users");
const followRouter = require("./routes/follows") ;
const postRouter = require("./routes/posts"); 

//Endpoints Router
app.use("/users", userRouter);
app.use("/users", followRouter);
app.use("/post", postRouter);



//Server up
app.listen(PORT, () => console.log(">>> SERVER ONLINE ON PORT " + PORT + "."));