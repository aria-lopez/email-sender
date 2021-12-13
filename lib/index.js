require('dotenv').config();
const express = require('express');
const app = express();
const CONNECTION_PORT = process.env.SERVER_PORT || 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/status-check', async (req, res) => {
    try {
        const status = { status: 'server working properly' };
        res.status(200).send(status);
    } catch(e) {
        console.log(e);
        const status = { status: 'server not working properly' };
        res.status(500).send(status);
    }
});

app.listen(CONNECTION_PORT, () => console.log(`email-sender listening @ ${CONNECTION_PORT}`));
