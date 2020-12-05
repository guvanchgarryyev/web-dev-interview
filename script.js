
// MSUBears implementation
/*
    write a code that prints the numbers from 1 to 100.
    multiples of three print “MSU”
    for multiples of five print “Bears”
    multiples of both three and five print “MSUBears”
*/

function printNumbers() {
    const minNum = 1;
    const maxNum = 100;
    
    // print every number untill maxNum
    for (let i = minNum; i <= maxNum; i++) {
        // first check if i is divisible by both 3 and 5
        if ((i % 3 === 0) && (i % 5 === 0))
            console.log('MSUBears');
        // check if i is divisible by 3
        else if (i % 3 === 0)
            console.log('MSU');
        // check if i is divisible by 5
        else if (i % 5 === 0)
            console.log('Bears');
        // if not divisible by 3 or 5, simply console.log(the number itself
        else
            console.log(i);
    }
}
// call the function
printNumbers();


/*----------------------------------------------------------------*/
/*----------------------------------------------------------------*/
// Fibonacci Sequence

// define our variables
let array = [0, 1];
const iterations = 15;

function fibonacciSequence(array, iterations) {
    // get numbers from our array
    let number1 = array[0];
    let number2 = array[1];
    
    let counter = array.length;
    let next;

    // calculate fibonacci sequence as long as counter is less than iterations
    while (counter < iterations) {
        // next is always the result of last two numbers
        next = number1 + number2;    
        array.push(next);
        // assign new values for the last two numbers
        number1 = number2;
        number2 = next;
        // increment counter
        counter++;
    }
    // return array of fibonacci sequence
    return array;
}
// display the result on the console
console.log(fibonacciSequence(array, iterations));


/*----------------------------------------------------------------*/
/*----------------------------------------------------------------*/
    // Recursion solution for fibonacci sequence
        // function fibonacci(array, length) {
        //     if (length <= array.length)
        //         return array;
            
        //     array.push(array[array.length - 2] + array[array.length - 1]);
        //     return fibonacci(array, length);
        // }