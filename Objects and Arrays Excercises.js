

// --------------------------------The Sum of a Range----------------------------------------------------------


/*
a)  Write a range function that takes two arguments, start and end, and returns an array 
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
b)  Next, write a sum function that takes an array of numbers
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
c)  modify your range function to take an optional third argument that 
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
a)  Arrays have a reverse method that changes the array by inverting the order 
    in which its elements appear. For this exercise, write two functions, 
    reverseArray and reverseArrayInPlace. The first, reverseArray, takes 
    an array as argument and produces a new array that has the same elements 
    in the inverse order.
*/

let reverseArray = (array) => {
    let newArray = [];
    for (i = 0; i < array.length; i++) {
        newArray.unshift(array[i]);
    }
    return newArray;
}

/*
b) The second, reverseArrayInPlace, does what the reverse 
    method does: it modifies the array given as argument by reversing its 
    elements. Neither may use the standard reverse method.
*/


    let reverseArrayInPlace = (array) => {
        let arrLgth = array.length;
        // add the reversed array to the front of the original
       for( i=0; i < arrLgth; i++) {
       array.unshift(array[i*2]);
        }
        // Remove original (non-reversed) array chunk
        array.splice(array.length/2);
        return array
    };



// --------------------------------A list-------------------------------------------



/*
a)  Objects, as generic blobs of values, can be used to build all sorts of data structures.
    A common data structure is the list (not to be confused with array). A list is a nested
    set of objects, with the first object holding a reference to the second, the second to
    the third, and so on.

let list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
};

Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] as argument. 
*/

let array = [1,2,3]
const arrayToList = (array) => {
    let list = null;
    for (i = array.length-1; i >= 0; i--) {
        list = {value : array[i], rest : list}
    }
    return list;
}
arrayToList(array);

// Also write a listToArray function that produces an array from a list.

let list = {value : 3, rest: {value : 4, rest: { value: 5, rest: null}}}


let listToArray = (obj) => {
    let arr = [];
    for(i = obj; i; i=i.rest) {
        if( "value" in i) {
            arr.push(i.value);
        }
    }
    return arr;
}

listToArray(list);

/* 
Then add a helper function prepend, which takes an element and a 
list and creates a new list that adds the element to the front of 
the input list, and nth, which takes a list and a number and returns 
the element at the given position in the list (with zero referring 
to the first element) or undefined when there is no such element.
*/


const prepend = (list, el) => {
   list = {value : el, rest : list};
    return list
} 

prepend(list, 4)


const nth = (list, nbr) => {
    let c=0;
    for( i=list ; i ; i=i.rest) {
        if (c == nbr) {return i};
        c++
    }
}

// If you haven’t already, also write a recursive version of nth.

let list = {value : 3, rest: {value : 4, rest: { value: 5, rest: null}}}

const nthRec = (list, nbr, c=0) => {
   if (nbr !== c) {nthRec(list.rest, nbr, c+1)}
   else {return list};

}

nthRec(list, 2);

function nth(list, n) {
    if (!list) return undefined;
    else if (n == 0) return list.value;
    else return nth(list.rest, n - 1);
  }


  // --------------------------------Deep Comparison---------------------------------------------------




 /*
  The == operator compares objects by identity. But sometimes you’d prefer to 
  compare the values of their actual properties.

Write a function deepEqual that takes two values and returns true only if they are 
the same value or are objects with the same properties, where the values of the 
properties are equal when compared with a recursive call to deepEqual.

To find out whether values should be compared directly (use the === operator for 
    that) or have their properties compared, you can use the typeof operator. If it 
    produces "object" for both values, you should do a deep comparison. But you have 
    to take one silly exception into account: because of a historical accident, 
    typeof null also produces "object".

The Object.keys function will be useful when you need to go over the
roperties of objects to compare them.

*/

const deepEqual = (obj1, obj2) => {

    if(typeof(obj1) == "object" && typeof(obj2) == "object" && obj1 != null && obj2 != null) {
        let a, b; a=Object.keys(obj1); b=Object.keys(obj2);
        if(a.length != b.length) return false;
        for(i=0; i < a.length; i++) {
            if (a[i] != b[i]) {return false} 
            } 

            for
        
    } else return obj1===obj2;
}

deepEqual({here: {is: "an"}, object: 2}, {here: {is: "an"}, object: 2})

let object={here: {is: "an"}, object: 2};
console.log(object);
// AHHHHH FUCK THIS!!!!! I AM NUTS!!!!!

// The provided code btw:

function deepEqual(a, b) {
    if (a === b) return true;
    
    if (a == null || typeof a != "object" ||
        b == null || typeof b != "object") return false;
  
    let keysA = Object.keys(a), keysB = Object.keys(b);
  
    if (keysA.length != keysB.length) return false;
  
    for (let key of keysA) {
      if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
    }
  
    return true;
  }

  