import { rejects } from 'assert'
import axios from 'axios'

const http = axios.create({
	timeout: 3000
})

export async function grab_api_price() {
	return new Promise((async (resolve, reject) => {
			await http.get('https://billcheap-prototype-thirdparty.herokuapp.com/grab/price')
				.then((res) => {
					console.info('[Grab] ' + JSON.stringify(res.data))
					resolve(res.data.price)
				})
				.catch((err) => {
					console.warn('[Grab] ' + err.toString())
					resolve(undefined)
				})
		}))
}

export async function gojek_api_price() {
		return new Promise((async (resolve, reject) => {
			await http.get('https://billcheap-prototype-thirdparty.herokuapp.com/gojek/cost')
				.then((res) => {
					console.info('[GoJek] ' + JSON.stringify(res.data))
					resolve(res.data.cost)
				})
				.catch((err) => {
					console.warn('[GoJek] ' + err.toString())
					resolve(undefined)
				})
		}))
}

export async function tada_api_price() {
	return new Promise((async (resolve, reject) => {
		await http.get('https://billcheap-prototype-thirdparty.herokuapp.com/tada/price')
			.then((res) => {
				console.info('[Tada] ' + JSON.stringify(res.data))
				resolve(res.data.price)
			})
			.catch((err) => {
				console.warn('[Tada] ' + err.toString())
				resolve(undefined)
			})
	}))
}

export async function ryde_api_price() {
		return new Promise((async (resolve, reject) => {
			await http.get('https://billcheap-prototype-thirdparty.herokuapp.com/ryde/pricing')
				.then((res) => {
					console.info('[Ryde] ' + JSON.stringify(res.data))
					resolve(res.data.pricing)
				})
				.catch((err) => {
					console.warn('[Ryde] ' + err.toString())
					resolve(undefined)
				})
		}))
}

export async function all_prices(): Promise<object> {
		console.info('Invoking all API calls')
		const data = await Promise.all([ryde_api_price(), grab_api_price(), gojek_api_price(), tada_api_price()])
		const prices = {
				ryde: data[0],
				grab: data[1],
				gojek: data[2],
				tada: data[3]
		}

		console.info('API calls complete')
		return prices
}
