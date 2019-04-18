import { APIGatewayProxyResult, Callback, Context, Handler } from 'aws-lambda'
import * as API from './src/api'

module.exports.checkPrice = async (event: any, context: Context) => {
	const price = await API.all_prices()
	const response: APIGatewayProxyResult = {
		statusCode: 200,
		body: JSON.stringify(price)
	}
	return response
}
