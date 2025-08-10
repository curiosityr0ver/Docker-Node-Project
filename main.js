const express = require('express');

const app = express();

const PORT = process.env.PORT || 8000;

// Middleware to parse JSON bodies
app.use(express.json());
// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));


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

app.get('/error', (req, res) => {
    // Simulate an error
    res.status(500).json({
        error: 'Internal Server Error',
        message: 'Something went wrong!',
        timestamp: new Date().toISOString(),
        status: 'error',
        environment: process.env.NODE_ENV || 'development'
    });
});

app.post('/data', (req, res) => {

    const { email, username, mobile } = req.body;
    console.log('Received user data:', { email, username, mobile });


    // Simulate data processing
    res.json({
        message: 'Data received successfully',
        status: 'success',
        timestamp: new Date().toISOString(),
        environment: process.env.NODE_ENV || 'development'
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});