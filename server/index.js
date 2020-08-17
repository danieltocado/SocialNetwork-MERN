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
const uploadRouter = require("./routes/uploads"); 

//Endpoints Router
app.use("/users", userRouter);
//app.use("/files", uploadRouter);

app.post('/files/upload', (req, res) => {
  
  if(req.files === null) {
    return res.status(400).json({ message: 'No file was uploaded'})
  }

  const file = req.files.file;

  file.mv(`../client/public/uploads/${file.name}`, err => {
    if(err) {
      console.error(err);
      return res.status(500).send(err);
    }

    res.json({ file_name: file.name, file_path: `/uploads/${file.name}`})
  })
})

//Server up
app.listen(PORT, () => console.log(">>> SERVER ONLINE ON PORT " + PORT + "."));