import { APIGatewayProxyResult, Callback, Context, Handler } from 'aws-lambda'
import { all_prices } from './src/api'

const checkPrice: Handler = async (event: any, context: Context, callback: Callback) => {
	const response: APIGatewayProxyResult = {
		statusCode: 200,
		body: JSON.stringify(
				await all_prices()
		)
	}
	callback(undefined, response)
}

export { checkPrice }
