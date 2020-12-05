
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