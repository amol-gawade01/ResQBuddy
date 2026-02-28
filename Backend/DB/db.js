import mongoose from 'mongoose';
import Protocolseed from '../seed/seedProtocols.js';
import Triageseed from '../seed/seedTriage.js';


const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_CONNECTION);
        console.log('Connected to MongoDB');
        // Seed the database with initial data
        await Protocolseed();
        await Triageseed();
    }

    catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
    }
};


export default connectDB;