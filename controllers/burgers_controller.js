const express = require('express');
const router = express.Router();
const burger = require('../models/burger.js');

router.get('/index', function(req, res) {
	burger.selectAll(function(data) {
		const burgersObject = {
			burgers: data
		};
		console.log(burgersObject);
    	res.render('index', burgersObject);
	});
});

router.post('/api/burgers', function(req, res) {
	burger.insertOne([
		'name', 'devoured'
	], [
		req.body.name, req.body.devoured	
	], function(result) {
		res.json({ id: result.insertId });
	});
});

router.put('/api/burgers/:id', function(req, res) {
	const condition = "id = " + req.params.id;
  	console.log("condition", condition);

  	burger.updateOne({
  		devoured: req.body.devoured
  	}, condition, function(result) {
  		if (result.changedRows === 0) {
  			return res.status(404).end();
  		} else {
  			res.status(200).end();
  		}
  	});
});

module.exports = router;