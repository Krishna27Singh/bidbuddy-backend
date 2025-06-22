require('dotenv').config();
const mongoose = require('mongoose');

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  console.error('MongoDB URI is not defined. Please set the MONGO_URI environment variable.');
  process.exit(1); // Exit if the URI is not set
}

mongoose.connect(MONGO_URI)
  .then(() => console.log(`MongoDB connected: ${MONGO_URI}`))
  .catch((err) => console.error('MongoDB connection error:', err));

module.exports = mongoose;
