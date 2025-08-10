const express = require('express');

const app = express();

const PORT = process.env.PORT || 8000;

app.get('/', (req, res) => {
    // res.send('Hello, Express!');

    res.json({
        message: 'Hello, Express!',
        status: 'success'
    });

});

app.get('/health', (req, res) => {
    res.json({
        status: 'healthy',
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
        memoryUsage: process.memoryUsage(),
        environment: process.env.NODE_ENV || 'development'

    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});