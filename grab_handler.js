import * as API from './src/api'

exports.handler = async (event) => {
	const prices = JSON.stringify(await API.all_prices())
	const response = {
			statusCode: 200,
			body: prices,
	}
	return response
}
