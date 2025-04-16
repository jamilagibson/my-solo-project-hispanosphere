//import express library
import express from 'express';
//import Mongoose Country model to query database
import Country from '../models/Country.js';

//instantiate new express router
const router = express.Router();

//define GET endpoint to return data for specific country using country code (example: GQ)
router.get('/:code', async (req, res) => {
    //extract country code from URL params
    const { code } = req.params;

    try {
        //Look up country code in database by uppercase code
        const country = await Country.findOne ({ code: code.toUpperCase() });

        //If country not found, send 404 res
        if (!country) {
            return res.status(404).json({ message: 'Country not found' });
        }

        //otherwise, return country data as JSON
        res.json(country);
    } catch (err) {
        //if there's server or database err, send 500 res
        res.status(500).json({ message: 'Server error', error: err.message });
    }
});

//Export router to be used in server.js
export default router;