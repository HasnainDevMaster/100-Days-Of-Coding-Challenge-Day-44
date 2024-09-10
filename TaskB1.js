"use strict";
// 100 Days Of Coding Challenge!
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
/** Question 131: Creating and Importing Modules
Create two modules; one that exports a class, and another that imports the class and creates an instance.*/
//---------------------------------------------------------------------------------------------------------
// Exporting the Person class:
// This class represents a person with a name and a greet method
class Person {
    constructor(name) {
        this.name = name;
    }
    // Method to greet using the person's name
    greet() {
        console.log(`Hi, my name is ${this.name}`);
    }
}
exports.Person = Person;
