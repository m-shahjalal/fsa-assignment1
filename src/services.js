const { faker } = require('@faker-js/faker');

const services = {};

services.getRandomValue = (start, end) => {
    const min = parseInt(start);
    const max = parseInt(end);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

services.generateFakePerson = (data) => {
    const properties = Object.keys(data)
    const person = {};
    if (properties.includes('firstName')) person.firstName = faker.name.firstName();
    if (properties.includes('lastName')) person.lastName = faker.name.lastName();
    if (properties.includes('email')) person.email = faker.internet.email();
    if (properties.includes('age')) person.age = services.getRandomValue(18, 45);
    if (properties.includes('address')) person.address = faker.address.streetAddress();

    return person;
};

services.calculateString = (string) => {
    const obj = { chars: 0, digits: 0, special: 0 };

    for (let i = 0; i < string.length; i++) {
        if (/[a-z]/.test(string[i].toLowerCase())) obj.chars++;
        else if (/[0-9]/.test(string[i])) obj.digits++;
        else obj.special++;
    }

    return obj;
};

module.exports = services;
