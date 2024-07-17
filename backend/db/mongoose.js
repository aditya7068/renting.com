const mongoose = require("mongoose");
require('dotenv').config();

const DB=process.env.MONGODB_URL
mongoose.connect(DB, {
  useNewUrlParser: true,
}).then(() => {
  console.log('MongoDB connected successfully');
}).catch((error) => {
  console.error('MongoDB connection error:', error);
});