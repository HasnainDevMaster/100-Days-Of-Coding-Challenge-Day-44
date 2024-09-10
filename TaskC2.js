"use strict";
// Question 132:
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import Default
const TaskC1_1 = __importDefault(require("./TaskC1"));
console.log(TaskC1_1.default); // Output: Hey, world!
// Named Import
const TaskC1_2 = require("./TaskC1");
console.log("value of PI: ", TaskC1_2.PI); // Output: value of PI:  3.14159
console.log("square of 5: ", (0, TaskC1_2.square)(5)); // Output: square of 5:  25
console.log("double of 10: ", (0, TaskC1_2.double)(10)); // Output: double of 10:  20
