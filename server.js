const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); // Middleware til at parse JSON-data

// Definer en GET-rute til rod-URL'en
app.get('/', (req, res) => {
    res.send('Hello, Express!');
});

// Definer en POST-rute til /submit
app.post('/submit', (req, res) => {
    const data = req.body;
    res.json({
        message: 'Data received',
        data: data
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
