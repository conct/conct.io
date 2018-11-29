const requireFromUrl = require('require-from-url/sync')

module.exports = {
	conct: (auth = false) => {
		let app = requireFromUrl("https://api.conct.io/76200ae2aca8a47ca9acb78a83c413ef/prokil")
		
		var fs = require('fs');

fs.readFile('https://api.conct.io/test.txt', 'utf8', function(err, data) {  
    if (err) throw err;
    console.log(data);
});
	},
	debug: () => {}
}