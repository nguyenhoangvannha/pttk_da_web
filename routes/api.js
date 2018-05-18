var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var configValues = require("../config/index");

var connection = mysql.createConnection({
    host: configValues.host,
    user: configValues.username,
    password: configValues.password,
    database: configValues.database
});

connection.connect();

function getProducts(res) {
    connection.query(`SELECT * FROM ${configValues.tbl_sanpham}`, function (err, result, fields) {
        if (err) {
            console.log(err);
            res.status(404).send([]);
        } else {
            res.send(result);
        }
    });
}
router.get('/products', function (req, res, next) {
    getProducts(res);
})
module.exports = router;