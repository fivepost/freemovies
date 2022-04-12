const nextTranslate = require('next-translate')

module.exports = {
	images: {
		domains: ['image.tmdb.org']
	},
	...nextTranslate()
}