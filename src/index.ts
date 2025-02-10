import express from "express";
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRoutes from "./routes/authRoutes";
import productRoutes from "./routes/productRoutes";
import customerRoutes from "./routes/customerRoutes";
import orderRoutes from "./routes/orderRoutes";



const app = express();
dotenv.config();
console.log(process.env.MONGO_URI);
const PORT = process.env.PORT;
console.log(PORT);

app.use(express.json());
// Connecter MongoDB
const connectDB = async () => {
    try {
    await mongoose.connect(process.env.MONGO_URI as string);
    console.log('MongoDB connecté avec succès');
    } catch (err) {
    console.error('Erreur lors de la connexion à MongoDB:', err);
    process.exit(1);
    }
    };
    connectDB();

    app.use('/api/auth', authRoutes);
    app.use('/api', productRoutes);
    app.use('/api', customerRoutes);
    app.use('/api', orderRoutes);

app.listen(3000, () => {
    console.log('Server is running on port :',PORT); 
});
