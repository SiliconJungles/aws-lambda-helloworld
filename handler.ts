import { APIGatewayProxyResult, Callback, Context, Handler } from 'aws-lambda'

const main: Handler = (event: any, context: Context, callback: Callback) => {
	const response: APIGatewayProxyResult = {
		statusCode: 200,
		body: JSON.stringify({
			message: Math.floor(Math.random() * 1000)
		})
	}
	callback(undefined, response)
}

const secondary: Handler = (event: any, context: Context, callback: Callback) => {
	const response: APIGatewayProxyResult = {
		statusCode: 200,
		body: JSON.stringify({
			message: 'secondary'
		})
	}
	callback(undefined, response)
}

export { main, secondary }
