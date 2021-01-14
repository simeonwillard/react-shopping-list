const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// TODO - Add routes here...

// PUT route
router.put('/reset', (req, res) => {
    

    const queryText = `UPDATE "shopping_list" SET "purchased" = $1;`;

    pool.query(queryText, [req.params.purchased])
    .then((result) => {
        console.log(result);
        res.sendStatus(200);
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500);
    });
})


module.exports = router;