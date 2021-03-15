"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.retryWithDelay = void 0;
var operators_1 = require("rxjs/operators");
function retryWithDelay(retryDelay, count) {
    if (count === void 0) { count = 1; }
    return function (source) {
        return source.pipe(operators_1.retryWhen(function (errors) {
            return errors.pipe(operators_1.scan(function (acc, error) { return ({ count: acc.count + 1, error: error }); }, {
                count: 0,
                error: undefined,
            }), operators_1.tap(function (current) {
                if (current.count > count) {
                    throw current.error;
                }
            }), operators_1.delay(retryDelay));
        }));
    };
}
exports.retryWithDelay = retryWithDelay;
