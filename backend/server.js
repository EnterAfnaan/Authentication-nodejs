const express = require('express')
const multer = require("multer");
const dotenv = require('dotenv').config()
const port = process.env.PORT 


const {errorHandler} = require('./middleware/errorMiddleware')

const connectDB = require('./config/db')

connectDB();

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))


app.use('/api/uploadFiles' , require('./routes/uploadFileRoutes'))
app.use('/api/users' , require('./routes/userRoutes'))


app.use(errorHandler)

app.listen(port , () => console.log(`server is running on port ${port}`))



// const fileStorageEngine = multer.diskStorage({
//     destination: (req, file, cb) => {
//       cb(null, "./savefiles"); //important this is a direct path fron our current file to storage location
//     },
//     filename: (req, file, cb) => {
//       cb(null, Date.now() + "--" + file.originalname);
//     },
//   });
  
//   // Route To Load Index.html page to browser
//   app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname, "index.html"));
//   });

//   const upload = multer({ storage: fileStorageEngine });
  
//   app.post("/single", upload.single("image"), (req, res) => {
//     console.log(req.file);
//     res.send("Single FIle upload success");
//   });