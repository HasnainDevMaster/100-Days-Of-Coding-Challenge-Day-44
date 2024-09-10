// 100 Days Of Coding Challenge!

/** Question 131: Creating and Importing Modules
Create two modules; one that exports a class, and another that imports the class and creates an instance.*/

//---------------------------------------------------------------------------------------------------------

// Exporting the Person class:

// This class represents a person with a name and a greet method
export class Person {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    // Method to greet using the person's name
    greet() {
        console.log(`Hi, my name is ${this.name}`);
    }
}