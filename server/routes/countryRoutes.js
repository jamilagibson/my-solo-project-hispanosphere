//import express library
import express from 'express';
//import Mongoose Country model to query database
import Country from '../models/Country.js';

//instantiate new express router
const router = express.Router();

//GET all countries
router.get('/', async (req, res) => {
    try {
        const countries = await Country.find();
        res.json(countries);
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
});

//GET single country by code
router.get('/:code', async (req, res) => {
    const { code } = req.params;

    try {
        const country = await Country.findOne({ code: code.toUpperCase() });

        if (!country) {
            return res.status(404).json({ message: 'Country not found' });
        }

        res.json(country);
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
});

export default router;
