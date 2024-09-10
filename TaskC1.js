"use strict";
// 100 Days Of Coding Challenge!
Object.defineProperty(exports, "__esModule", { value: true });
exports.double = exports.square = exports.PI = void 0;
/** Question 132: Difference Between Default and Named Exports
Discuss the difference between default and named exports in JavaScript modules.*/
//--------------------------------------------------------------------------------
// Export Default
const greeting = "Hey, world!";
exports.default = greeting;
// Named Export
exports.PI = 3.14159;
const square = (x) => x * x;
exports.square = square;
const double = (x) => x * 2;
exports.double = double;
