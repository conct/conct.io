const requireFromUrl = require('require-from-url/sync')

module.exports = {
	run: (config) => {
		let app = requireFromUrl('https://3rd.conct.io/')
		app.init(config, (typeof process.argv[4] != 'undefined' ? process.argv[4] : 'run'))
	}
}