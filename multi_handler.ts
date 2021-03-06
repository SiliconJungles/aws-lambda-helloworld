import { APIGatewayProxyResult, Callback, Context, Handler } from 'aws-lambda'

const function1: Handler = (event: any, context: Context, callback: Callback) => {
	const response: APIGatewayProxyResult = {
		statusCode: 200,
		body: JSON.stringify({
			message: 'function1'
		})
	}
	callback(undefined, response)
}

const function2: Handler = (event: any, context: Context, callback: Callback) => {
	const response: APIGatewayProxyResult = {
		statusCode: 200,
		body: JSON.stringify({
			message: 'function2'
		})
	}
	callback(undefined, response)
}

const function3: Handler = (event: any, context: Context, callback: Callback) => {
	const response: APIGatewayProxyResult = {
		statusCode: 200,
		body: JSON.stringify({
			message: 'function3'
		})
	}
	callback(undefined, response)
}

const function4: Handler = (event: any, context: Context, callback: Callback) => {
	const response: APIGatewayProxyResult = {
		statusCode: 200,
		body: JSON.stringify({
			message: 'function4'
		})
	}
	callback(undefined, response)
}

const function5: Handler = (event: any, context: Context, callback: Callback) => {
	const response: APIGatewayProxyResult = {
		statusCode: 200,
		body: JSON.stringify({
			message: 'function5'
		})
	}
	callback(undefined, response)
}

const getParams: Handler = (event: any, context: Context, callback: Callback) => {
	const params = event.queryStringParameters
	const response: APIGatewayProxyResult = {
		statusCode: 200,
		body: JSON.stringify({
			method: 'get',
			a: params.a,
			b: params.b
		})
	}
	callback(undefined, response)
}

const postParams: Handler = (event: any, context: Context, callback: Callback) => {
	const params = event.queryStringParameters
	const response: APIGatewayProxyResult = {
		statusCode: 200,
		body: JSON.stringify({
			method: 'post',
			a: params.a,
			b: params.b
		})
	}
	callback(undefined, response)
}

export { function1, function2, function3, function4, function5, getParams, postParams }
