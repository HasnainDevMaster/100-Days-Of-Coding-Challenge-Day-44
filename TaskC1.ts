// 100 Days Of Coding Challenge!

/** Question 132: Difference Between Default and Named Exports
Discuss the difference between default and named exports in JavaScript modules.*/

//--------------------------------------------------------------------------------


// Export Default
const greeting = "Hey, world!";
export default greeting;

// Named Export
export const PI = 3.14159;
export const square = (x: number) => x * x;
export const double = (x: number) => x * 2;