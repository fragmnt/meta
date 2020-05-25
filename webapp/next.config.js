require('dotenv').config();

module.exports = {
	env: {
		apiUrl: process.env.NODE_ENV === 'development' ? process.env.BASE_API_URL : process.env.PROD_API_URL
	}
}
