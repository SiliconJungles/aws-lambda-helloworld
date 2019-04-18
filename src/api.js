"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const http = axios_1.default.create({
    timeout: 3000
});
function grab_api_price() {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise(((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            yield http.get('https://billcheap-prototype-thirdparty.herokuapp.com/grab/price')
                .then((res) => {
                console.info('[Grab] ' + JSON.stringify(res.data));
                resolve(res.data.price);
            })
                .catch((err) => {
                console.warn('[Grab] ' + err.toString());
                resolve(undefined);
            });
        })));
    });
}
exports.grab_api_price = grab_api_price;
function gojek_api_price() {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise(((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            yield http.get('https://billcheap-prototype-thirdparty.herokuapp.com/gojek/cost')
                .then((res) => {
                console.info('[GoJek] ' + JSON.stringify(res.data));
                resolve(res.data.cost);
            })
                .catch((err) => {
                console.warn('[GoJek] ' + err.toString());
                resolve(undefined);
            });
        })));
    });
}
exports.gojek_api_price = gojek_api_price;
function tada_api_price() {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise(((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            yield http.get('https://billcheap-prototype-thirdparty.herokuapp.com/tada/price')
                .then((res) => {
                console.info('[Tada] ' + JSON.stringify(res.data));
                resolve(res.data.price);
            })
                .catch((err) => {
                console.warn('[Tada] ' + err.toString());
                resolve(undefined);
            });
        })));
    });
}
exports.tada_api_price = tada_api_price;
function ryde_api_price() {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise(((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            yield http.get('https://billcheap-prototype-thirdparty.herokuapp.com/ryde/pricing')
                .then((res) => {
                console.info('[Ryde] ' + JSON.stringify(res.data));
                resolve(res.data.pricing);
            })
                .catch((err) => {
                console.warn('[Ryde] ' + err.toString());
                resolve(undefined);
            });
        })));
    });
}
exports.ryde_api_price = ryde_api_price;
function all_prices() {
    return __awaiter(this, void 0, void 0, function* () {
        console.info('Invoking all API calls');
        const data = yield Promise.all([ryde_api_price(), grab_api_price(), gojek_api_price(), tada_api_price()]);
        const prices = {
            ryde: data[0],
            grab: data[1],
            gojek: data[2],
            tada: data[3]
        };
        console.info('API calls complete');
        return prices;
    });
}
exports.all_prices = all_prices;
