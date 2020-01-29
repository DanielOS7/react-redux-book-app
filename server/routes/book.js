const express = require('express');
const router = express.Router();
const mySql = require('../dbconnection');
const con = mySql();

router.get('/', (request, response) => {

    con.query(`SELECT * from assessment2`, (error, data) => {
        if (error) {
            console.log('Error retrieving books');
        }
        else {
            console.log('Books retrieved');
            response.send(data);
        }
    });
});

module.exports = router;
