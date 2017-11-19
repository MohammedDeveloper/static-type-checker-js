let thisName = "Mohammed Rafi";
// thisName = true; /// ERROR IN COMPILATION

let thisNumber = 4;
// thisNumber = "TEST"; /// ERROR IN COMPILATION

let thisBoolean = false;
// thisBoolean = "Mohammed Rafi"; /// ERROR IN COMPILATION

let thisStringArray = ["TEST1", "TEST2", "TEST3"];
// thisStringArray = ["TEST1", "TEST2", 3333] /// ERROR IN COMPILATION

let thisNumberArray = [1, 2, 3];
// thisNumberArray = [1, 2, 3, "TEST1"] /// ERROR IN COMPILATION


/// INTERFACE


/// VARIABLE of Person type
let thisPerson = {
    name: "Mohammed Rafi",
    age: 27,
    hasKids: false /// Optional
};

/// FUNCTIONS - ACCEPTING MULTIPLE TYPE PARAMETERS
function greet(name) {
    return "ASAK WRWB " + name;
}

/// call the function
console.log(greet("Everyone"));
// console.log(greet(true)); /// ERROR IN COMPILATION

/// UTILITY TYPES


/// set the constants
const stop = "Red";
const slowDown = "Yellow";
const goOn = "Green";
// const doNotMove: Signals = "Brown"; /// ERROR IN COMPILATION