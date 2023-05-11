const express = require('express');
const router = require('./src/routes');

const app = express();
app.use(express.json());
app.use('/api',router);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(5000, () => console.log('Server running on port 5000'));
