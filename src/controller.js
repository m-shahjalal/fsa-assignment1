const { getRandomValue, generateFakePerson, calculateString } = require('./services');

const controller = {};

controller.getRandomNumber = async (req, res) => {
    const { start, end } = req.query;
    const getNumber = getRandomValue(start, end);
    res.json({ number: getNumber });
};

controller.getPerson = async (req, res) => {
    const properties = req.query;
    const person = generateFakePerson(properties);
    res.json({ person });
};

controller.calculateString = async (req, res) => {
    const { string } = req.query;
    const result = calculateString(string);
    res.json({ result });
};

module.exports = controller;
