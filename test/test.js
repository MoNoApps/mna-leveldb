var assert = require("assert")
var levelup = require('levelup');
var db = levelup('./data/lebeldb/test/')

describe('Testing put and get', function() {
	describe('#indexOf()', function() {
		db.put('key', 'value', function(err) {
			if (err) {
				console.log('Error on save: ', err);
			}
			db.get('key', function(err, value) {
				if (err) {
					console.log('Error on reading:', err);
				} else {
					it('should return the value', function() {
						assert.equal('value', value);
					})
		
					db.get('key', function(err) {
						if (err) {
							console.log('Error on delete:', err);
						} else {
							console.log('Successfully deleted');
						}
					});
				}
			});
		});
	})
})
