const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const mongoUri = process.env.MONGO_URI;
if (!mongoUri) {
    throw new Error('MONGO_URI variable is not defined.');
}

const connectToDatabase = async () => {
    try {
        await mongoose.connect(mongoUri)
        .then(() => console.log('Connected to MongoDB'))
        .catch((error) => console.error('Error connecting to MongoDB:', error));
    } catch (err) {
        console.error('Database connection error:', err);
    }
};

module.exports = connectToDatabase;
