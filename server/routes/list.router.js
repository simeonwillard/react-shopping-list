const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// TODO - Add routes here...
router.delete('/:id', (req, res) => {
    console.log(req.params.id)
    let id = req.params.id

    const queryText = `DELETE FROM shopping_list WHERE id = $1`

    pool.query(queryText, [id])
    .then((result) => {
        res.sendStatus(204)
    }).catch((err) => {
        console.log(err)
        res.sendStatus(500)
    })
})

router.delete('/clear', (req, res) => {
    const queryText = `DELETE FROM shopping_list`

    pool.query(queryText)
    .then((result) => {
        res.sendStatus(204)
    }).catch((err) => {
        console.log(err)
    })
})

module.exports = router;