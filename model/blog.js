const mongoose = require("mongoose");
const schema = mongoose.Schema({
    name :  String,
   description : String,
   title :  String,
})
const model = mongoose.model("blogs", schema);
module.exports = model