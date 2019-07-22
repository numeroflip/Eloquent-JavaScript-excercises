// --------------------------------The Sum of a Range---------------------------

/*
Write a range function that takes two arguments, start and end, and returns an array 
containing all the numbers from start up to (and including) end.
*/

let range = (start, end) => {
    let result = [];
    for (i = start; i <= end ; i++) {
        result.push(i);
    }
    return result;
}

range(5,22);

/*
Next, write a sum function that takes an array of numbers
and returns the sum of these numbers. Run the example program 
and see whether it does indeed return 55.
*/

