require("dotenv").config();
const express = require("express");
const app = express();
const connect = require("./db/connect");
const routes = require("./routes/crud.routes")

connect()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.use("/api",routes);

app.get("/",(req,res)=>{
  res.send("Hello World")
})


app.listen(process.env.PORT, () => {
  console.log(`Server running on http://localhost:${process.env.PORT}`);
});








