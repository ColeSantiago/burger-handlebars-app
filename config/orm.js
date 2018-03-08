const connection = require('../config/connection.js');

const orm = {
	selectAll: function(tableInput, cb) {
		const queryString = "SELECT * FROM " + tableInput + ";";
	    connection.query(queryString, function(err, result) {
	      if (err) throw err;
	      cb(result);
	    });
	},

	insertOne: function(table, cols, vals, cb) {
		let queryString = 'INSERT INTO ' + table + ' (' + cols + ')' + ' VALUES (' + vals + ')';
	    console.log(queryString);
	    connection.query(queryString, function(err, result) {
	      if (err) throw err;
	      cb(result);
	    });
	},

	updateOne: function() {

	}
};

module.exports = orm;