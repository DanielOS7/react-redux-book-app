const express = require("express");
const cors = require('cors');
const book = require('./routes/book');
const app = express();
const config = require('./config.json');
const profile = config.currentProfile;
const configProfile = config[profile];

const PORT = configProfile.node_port;

app.use(cors());
app.use('/books', book);

app.listen(PORT);
