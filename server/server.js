//MAIN EXPRESS SERVER

// import dependencies
import express from "express";
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import countryRoutes from './routes/countryRoutes.js';

//load environment var
dotenv.config();

// create app instance
const app = express();

//enable flexibility for deployment
const PORT = process.env.PORT || 8080;

//configure options for cors
const corsOptions = {
    //vite servers run on 5173
    origin: ["http://localhost:5173"],
};

//MIDDLEWARE
app.use(cors(corsOptions));
app.use(express.json());

app.use('/api/countries', countryRoutes);

app.get('/', (req, res) => {
    res.send('Hispanosphere backend is running');
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('Connection error', err));
