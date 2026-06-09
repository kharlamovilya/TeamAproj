const express = require("express");

const router = express.Router();

router.get("/", async (req, res) => {

    const city = req.query.city;

    if (!city) {
        return res.status(400).json({
            error: "City parameter is required"
        });
    }

    res.json({
        city: city,
        temperature: 25,
        description: "Sunny"
    });
});

module.exports = router;