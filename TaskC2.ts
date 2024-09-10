// Question 132:

// Import Default
import greet from './TaskC1';
console.log(greet); // Output: Hey, world!

// Named Import
import { PI, square, double } from './TaskC1';
console.log("value of PI: ", PI); // Output: value of PI:  3.14159
console.log("square of 5: ", square(5)); // Output: square of 5:  25
console.log("double of 10: ", double(10)); // Output: double of 10:  20
