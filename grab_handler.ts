import { APIGatewayProxyResult, Callback, Context, Handler } from 'aws-lambda'

const checkPrice: Handler = (event: any, context: Context, callback: Callback) => {
	const response: APIGatewayProxyResult = {
		statusCode: 200,
		body: JSON.stringify({
				grab_price: '123'
		})
	}
	callback(undefined, response))
}

export { checkPrice }
