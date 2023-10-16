const express = require("express");
const dbcon = require("./config/dbCon");
const bodyparser = require('body-parser')
const userRoute = require("./routes/userRoute");
const cors = require('cors');

dbcon();
const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())
app.use("/api/user",userRoute);




app.listen(PORT,()=>{
    console.log(`server is running on the port ${PORT}`);
})
