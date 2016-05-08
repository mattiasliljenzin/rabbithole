const express = require('express');
const router = express.Router();
const config = require('../config');
const stats = require('./stats').create(config);

router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

router.get('/', (req, res) => {
  stats.test((result) => {
    res.send(result);
  });
});

router.get('/overview', (req, res) => {
  stats.overview((result) => {
    res.send(result);
  });
});

router.get('/queues', (req, res) => {
  stats.queues((result) => {
    res.send(result);
  });
});

router.get('/whoami', (req, res) => {
  stats.whoami((result) => {
    res.send(result);
  });
});

module.exports = router;
