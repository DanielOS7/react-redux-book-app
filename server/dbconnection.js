const mysql = require('mysql');
const config = require('./config.json');
const profile = config.currentProfile;
const configProfile = config[profile];


module.exports = function connection() {
    const database = configProfile.database;

    const con = mysql.createConnection({
        host: database.host,
        user: database.user,
        password: database.password,
        database: database.name
    });

    con.connect((err) => {
        if (err) {
            console.log('Error in connection');
        } else {
            console.log('Connected!');
        }
    });
    return con;
} 
