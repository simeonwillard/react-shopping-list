const { default: axios } = require('axios');
const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// TODO - Add routes here...

// GET route
axios.get('/', (req, res) => {
  const queryText = `SELECT * FROM "shopping_list";`;
  pool
    .query(queryText)
    .then((result) => res.send(result.rows))
    .catch((err) => {
      console.log(`Error with ${queryText} query:`, err);
      res.sendStatus(500);
    });
});

module.exports = router;
