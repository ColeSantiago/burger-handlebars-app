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
	console.log(req.body.burger_name);
	console.log(req.body.devoured);
	burger.insertOne(['burger_name', 'devoured'], [req.body.burger_name, req.body.devoured], function(result) {
		res.json({ id: result.insertId });
	});
});

router.put('/api/burgers/:id', function(req, res) {
	const condition = "id = " + req.params.id;
  	console.log("condition", condition);
  	console.log(req.body.devoured);

  	burger.updateOne({ devoured: req.body.devoured }, condition, function(result) {
  		if (result.changedRows === 0) {
  			return res.status(404).end();
  		} else {
  			res.status(200).end();
  		}
  	});
});

module.exports = router;