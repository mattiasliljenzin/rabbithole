const express = require('express');
const router = express.Router();
const config = require('../config');
const rabbithole = require('./rabbithole').create(config);

router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

router.get('/', (req, res) => {

  var payload = {
    test: "hej"
  };

  rabbithole.send("mattias-testar-ttl", payload, (result) => {
    res.send(result);
  });
});

module.exports = router;
