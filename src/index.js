// @flow

/// VARIABLES
let thisName: string = "Mohammed Rafi";
// thisName = true; /// ERROR IN COMPILATION

let thisNumber: number = 4;
// thisNumber = "TEST"; /// ERROR IN COMPILATION

let thisBoolean: boolean = false;
// thisBoolean = "Mohammed Rafi"; /// ERROR IN COMPILATION

let thisStringArray: string[] = ["TEST1", "TEST2", "TEST3"];
// thisStringArray = ["TEST1", "TEST2", 3333] /// ERROR IN COMPILATION

let thisNumberArray: number[] = [1, 2, 3];
// thisNumberArray = [1, 2, 3, "TEST1"] /// ERROR IN COMPILATION


/// INTERFACE
interface Person {
    name: string,
    age: number,
    hasKids?: boolean /// Optional
}

/// VARIABLE of Person type
let thisPerson: Person = {
    name: "Mohammed Rafi",
    age: 27,
    hasKids: false  /// Optional
};

/// FUNCTIONS - ACCEPTING MULTIPLE TYPE PARAMETERS
function greet(name: string | number): string {
    return "ASAK WRWB " + name;
}

/// call the function
console.log(greet("Everyone"));
// console.log(greet(true)); /// ERROR IN COMPILATION

/// UTILITY TYPES
type Signals = "Red" | "Yellow" | "Green";

/// set the constants
const stop: Signals = "Red";
const slowDown: Signals = "Yellow";
const goOn: Signals = "Green";
// const doNotMove: Signals = "Brown"; /// ERROR IN COMPILATION