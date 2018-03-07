const orm = require('../config/orm.js');

const burger = {
	selectAll: function() {
		orm.selectAll('burgers', function(res) {
			cb(res);
		});
	},
	insertOne: function() {
		orm.insertOne('burgers', function(res) {
			cd(res);
		});
	},
	updateOne: function() {
		orm.updateOne('burgers', function(res) {
			cd(res);
		});
	}
};

module.exports = burger;