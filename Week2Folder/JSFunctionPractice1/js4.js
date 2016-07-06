// 1. Write a function called 'tripleFive' which loops three times using a for loop. Each iteration of the loop, output 'Five!' using console.log.
var trippleFive = function () {
    for (var i=0; i<3; i++) {
        console.log("five!")
    }
}

trippleFive();

// 2. Write a function called 'lastLetter' which takes a single string argument and returns the last character in the string.
var lastletter = function(word) {
    console.log(word.slice(-1));
}

console.log(lastletter('Hello'));
console.log(lastletter('Island'));

// 3. Write a function called 'square' which takes a single argument which is a number, and returns number * number.
var square = function(number) {
    console.log(number * number);
}

square(3);

// 4. Write a function called 'negate' which takes a single number argument and returns the negative of that number.
