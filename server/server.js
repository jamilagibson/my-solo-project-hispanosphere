//do i need to npm i axios 
// import express
import express from "express";
// create app instance
const app = express();

//import cors
import cors from "cors";

//configure options for cors
const corsOptions = {
    //vite servers run on 5173
    origin: ["http://localhost:5173"],
};

//initialize app to use cors
app.use(cors(corsOptions));

//create entry point for route at /api; sends data from
app.get("/api", (req, res) => {
    //send data from backend api to front end to fetch; will be sent every time request is sent to api route
    res.json( { fruits: ["apple", "orange", "banana"] })
});

//run app; accesses app instance, ensures running on 8080, listens for any req sent to back end
app.listen(8080, () => {
    console.log("Server started on port 8080");
});