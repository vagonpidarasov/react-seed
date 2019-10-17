const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());

const shareNowVehicles = JSON.parse(fs.readFileSync('server/hello-world.json', 'utf8'));

app.get('/hello-world', (req, res) => {
    res.send(JSON.stringify(shareNowVehicles));
});

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});
