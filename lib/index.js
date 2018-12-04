const request = require('request'),
	  requireFromUrl = require('require-from-url/sync')

let conct = module.exports = {
	auth: (key = false) => {
		request.post('https://auth.conct.io/', { form: { key: key }}, function (err, res, body) {
			//console.log('error:', err)
			//console.log('statusCode:', res && res.statusCode) // response status code if a response was received
			//console.log('auth:', body)
			//conct.debug(body)
			//console.log('auth:', JSON.parse(body)['a'])
			//conct.init(body)
			
			conct.debug('...')
		})
	},
	init: (id) => {
		
	},
	debug: (x) => {
		console.log(x)
	}
}



/*

module.exports = {
	conct: (auth = false) => {
		app.listen(port)
		let app = requireFromUrl("https://api.conct.io/76200ae2aca8a47ca9acb78a83c413ef/prokil")
		app.init(auth)
	},
	debug: () => {}
}*/