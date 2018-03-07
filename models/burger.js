const orm = require('../config/orm.js');

const burger = {
	selectAll: function(cb) {
		orm.selectAll('burgers', function(res) {
			cb(res);
		});
	},
	insertOne: function() {
		orm.insertOne('burgers', function(res) {
			cb(res);
		});
	},
	updateOne: function() {
		orm.updateOne('burgers', function(res) {
			cb(res);
		});
	}
};

module.exports = burger;