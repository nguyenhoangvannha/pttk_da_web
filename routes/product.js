var express = require('express');
var router = express.Router();

function getProduct(res, ID) {
    
}
router.get('/:ID', function (req, res, next) {
    getProduct(res, req.params.ID);
});
module.exports = router;