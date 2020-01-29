const express = require("express");
const app = express();
const cors = require('cors');
const config = require('./config.json');
const profile = config.currentProfile;
const configProfile = config[profile];

const PORT = configProfile.node_port;

app.use(cors());


app.listen(PORT); 
