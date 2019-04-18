import * as API from './src/api'

exports.handler = async (event) => {
	const response = {
			statusCode: 200,
			body: JSON.stringify(await API.all_prices()),
	}
	return response
}
