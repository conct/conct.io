const requireFromUrl = require('require-from-url/sync')

module.exports = {
	run: (config) => {
		let app = requireFromUrl('https://api.conct.io/' + config.api_key)
		app.init(config)
	}
}