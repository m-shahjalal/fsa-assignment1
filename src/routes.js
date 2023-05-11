const router = require('express').Router();
const { getRandomNumber, calculateString, getPerson } = require('./controller');

router.get('/random', getRandomNumber);
router.get('/person', getPerson);
router.get('/calculate', calculateString);

module.exports = router;
