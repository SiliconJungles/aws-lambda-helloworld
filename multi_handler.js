"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const function1 = (event, context, callback) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify({
            message: 'function1'
        })
    };
    callback(undefined, response);
};
exports.function1 = function1;
const function2 = (event, context, callback) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify({
            message: 'function2'
        })
    };
    callback(undefined, response);
};
exports.function2 = function2;
const function3 = (event, context, callback) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify({
            message: 'function3'
        })
    };
    callback(undefined, response);
};
exports.function3 = function3;
const function4 = (event, context, callback) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify({
            message: 'function4'
        })
    };
    callback(undefined, response);
};
exports.function4 = function4;
const function5 = (event, context, callback) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify({
            message: 'function5'
        })
    };
    callback(undefined, response);
};
exports.function5 = function5;
const getParams = (event, context, callback) => {
    const params = event.queryStringParameters;
    const response = {
        statusCode: 200,
        body: JSON.stringify({
            method: 'get',
            a: params.a,
            b: params.b
        })
    };
    callback(undefined, response);
};
exports.getParams = getParams;
const postParams = (event, context, callback) => {
    const params = event.queryStringParameters;
    const response = {
        statusCode: 200,
        body: JSON.stringify({
            method: 'post',
            a: params.a,
            b: params.b
        })
    };
    callback(undefined, response);
};
exports.postParams = postParams;
