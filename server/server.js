//MAIN EXPRESS SERVER

//do i need to npm i axios 
// import dependencies
import express from "express";
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

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

//initialize app to use corsOptions; allows only Vite dev server to make requests
app.use(cors(corsOptions));

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hispanosphere backend is running');
})
//create entry point for route at /api; sends data from
app.get("/api", (req, res) => {
    //send data from backend api to front end to fetch; will be sent every time request is sent to api route
    res.json( { fruits: ["apple", "orange", "banana"] })
});

//run app; accesses app instance, ensures running on 8080, listens for any req sent to back end
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

//per terminal msg useNewUrlParser and useUnifiedTopology are deprecated
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then( () => console.log('MongoDB connected'))
    .catch( err => console.error('Connection error', err));