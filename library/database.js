const mongoose = require('mongoose');

// Fungsi untuk menghubungkan ke database MongoDB
const connectToDatabase = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/TestCapstone');
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
  }
};

module.exports = connectToDatabase;
