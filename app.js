const express = require('express');
const app = express();
const PORT = 3000;

function add(a, b) {
    return a + b;
}

function isEven(num) {
    return num % 2 === 0;
}

app.get('/', (req, res) => {
    res.json({ message: 'Hello from CI/CD app!', version: '1.0.0' });
});

app.get('/health', (req, res) => {
    res.json({ status: 'healthy' });
});

if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`App running on port ${PORT}`);
    });
}

module.exports = { app, add, isEven };
