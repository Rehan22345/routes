const mongoose = require('mongoose');

const connectdb = async ()=>{
    await mongoose.connect(process.env.CLUSTER);
  console.log("Hello from databse ");
}
module.exports = connectdb;