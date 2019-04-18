import { APIGatewayProxyResult, Callback, Context, Handler } from 'aws-lambda'
import * as API from './src/api'

// const checkPrice: Handler = async (event: any, context: Context) => {

// 	const prices = JSON.stringify(await API.all_prices())
// 	const response: APIGatewayProxyResult = {
// 		statusCode: 200,
// 		body: prices
// 	}
// 	return response
// }

// export { checkPrice }

module.exports.checkPrice = async (event: any, context: Context) => {
	const price = String(await API.ryde_api_price())
	const response: APIGatewayProxyResult = {
		statusCode: 200,
		body: price
	}
	return response
}
