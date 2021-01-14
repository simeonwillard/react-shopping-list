const { default: axios } = require('axios');
const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// TODO - Add routes here...
router.post('/', (req, res) => {
  const foodToAdd = req.body;
  console.log('in post, received', foodToAdd);
  const queryText = `INSERT INTO shopping_list ("name", "unit", "quantity")
    VALUES ($1, $2, $3)`;
  pool
    .query(queryText, [foodToAdd.name, foodToAdd.quantity, foodToAdd.unit])
    .then((result) => {
      console.log('added food to database,', foodToAdd);
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log('received error', error);
      res.sendStatus(500);
    });
});

// GET route
router.get('/', (req, res) => {
  const queryText = `SELECT * FROM "shopping_list";`;
  pool
    .query(queryText)
    .then((result) => res.send(result.rows))
    .catch((err) => {
      console.log(`Error with ${queryText} query:`, err);
      res.sendStatus(500);
    });
});

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
