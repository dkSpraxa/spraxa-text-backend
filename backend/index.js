const app = require("./app")
const mongoose = require("mongoose")
require("dotenv").config({path:"config/.env"})



app.listen(process.env.PORT,()=>{
    console.log(`server is running on http://localhost:${process.env.PORT}`)
})

//connecting database
mongoose.connect(process.env.DB_URI)
  .then((res) => {
    console.log(`Database connected with ${res.connection.host}`);
  })
  .catch((err) => {
    console.log(`Error during database connection: ${err}`);
  });