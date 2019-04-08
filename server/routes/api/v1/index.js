var express	= require('express');
var helloWorld		= require('./helloWorld');
var router	= express.Router();

router.get('/', function(req, res){
	res.send('welcome to api v1')
});

module.exports = router;