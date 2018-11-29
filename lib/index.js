const request = require('request')

let conct = module.exports = {
	auth: (key = false) => {
		request.post('https://docs.conct.io/', { form: { key: key }}, function (err, res, body) {
			//console.log('error:', err)
			//console.log('statusCode:', res && res.statusCode) // response status code if a response was received
			console.log('auth:', body)
			conct.debug(body)
			
		})
	},
	debug: (str) => {
		console.log('stat:', str)
	}
}