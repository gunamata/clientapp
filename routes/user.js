var express = require('express');
var router = express.Router();
const request = require('request');
var http_url = 'http://localhost:4000/api/users';

/* GET ALL USERS */
router.get('/', function(req, res, next) { 
    request(http_url,  (error, response, users) => {
	if(error) {
	    // If there is an error, tell the user 
	    res.json({
		error: error
	    });
	}
	// Otherwise do something with the API data and send a response
	else {
	    var usersObj = JSON.parse(users);
	    res.json(usersObj);
	}
    });   
});

/* SAVE USER */
router.post('/', function(req, res, next) {  
	 request.post({
		url: http_url,
		json: true,
		body: {
		    firstname: req.body.firstname,
		    lastname: req.body.lastname,
		    email: req.body.email
		}
	    },
	    function (error, response, body) {
		if (error) return next(error);
		res.json(body);
	    }	    
	   );	
});

/* GET SINGLE USER BY ID */
router.get('/:id', function(req, res, next) {  
    request(http_url + '/' + req.params.id,  (error, response, user) => {
	if(error) {
	    // If there is an error, tell the user 
	    res.json({
		error: error
	    })
	}
	// Otherwise do something with the API data and send a response
	else {
	    res.json({
		user: user
	    })	    
	}
    });   
});

/* UPDATE USER */
router.put('/:id', function(req, res, next) {  
    request.put(http_url + '/' + req.params.id,  req.body, (error, response, user) => {
	if(error) {
	    // If there is an error, tell the user 
	    res.json({
		error: error
	    })
	}
	// Otherwise do something with the API data and send a response
	else {
	    res.json({
		user: user
	    })	    
	}
    });   
});

/* DELETE USER */
router.delete('/:id', function(req, res, next) { 
    request.delete(http_url + '/' + req.params.id,  (error, response, user) => {
	if(error) {
	    // If there is an error, tell the user 
	    res.json({
		error: error
	    })
	}
	// Otherwise do something with the API data and send a response
	else {
	    res.json({
		user: user
	    })	    
	}
    });    
});

module.exports = router;
