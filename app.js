var levelup = require('levelup');
var db = levelup('./data/lebeldb/test/')

db.put('key', 'value', function(err) {
	if (err) {
		console.log('Error on save: ', err);
	}
	db.get('key', function(err, value) {
		if (err) {
			console.log('Error on reading:', err);
		} else {
			console.log(value);

			db.del('key', function(err) {
				if (err) {
					console.log('Error on delete:', err);
				} else {
					console.log('Successfully deleted');
				}
			});
		}
	});
});
