// --------------------------------The Sum of a Range----------------------------------------------------------

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

let sum = (array) => {
    let answ = 0;
    for (i = 0; i < array.length; i++) {
        answ = answ + array[i];
    }
    return answ;
}

/*
modify your range function to take an optional third argument that 
indicates the “step” value used when building the array. If no step 
is given, the elements go up by increments of one, corresponding 
to the old behavior. 
*/

range = (start, end, incr = 1) => {
    let result = [];
    if(incr >0) {
        for (i = start; i <= end ; i += incr) {
            result.push(i);
        } 
    } else {
        for (i = start; i >= end ; i += incr) {
            result.push(i);
        }
    }
    return result;
}


// --------------------------------Reversing an Array-------------------------------------------

/*
Arrays have a reverse method that changes the array by inverting the order 
in which its elements appear. For this exercise, write two functions, 
reverseArray and reverseArrayInPlace. The first, reverseArray, takes 
an array as argument and produces a new array that has the same elements 
in the inverse order. The second, reverseArrayInPlace, does what the reverse 
method does: it modifies the array given as argument by reversing its 
elements. Neither may use the standard reverse method.
*/

let reverseArray = (array) => {
    let newArray = [];
    for (i = 0; i < array.length; i++) {
        newArray.unshift(array[i]);
    }
    return newArray;
}


    let array = [99,13,24,55,888];
    let reverseArrayInPlace = (array) => {
        let lastEl=0
        let arrCopy = array;
        for( i=0; i < array.length; i++) {
            
        array[i] = arrCopy[-1];
        
        }
        console.log(arrCopy);
        return array    
        
    };
    reverseArrayInPlace(array);