"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main = (event, context, callback) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify({
            message: Math.floor(Math.random() * 1000)
        })
    };
    callback(undefined, response);
};
exports.main = main;
const secondary = (event, context, callback) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify({
            message: 'secondary'
        })
    };
    callback(undefined, response);
};
exports.secondary = secondary;
