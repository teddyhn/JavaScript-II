// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/


function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length)
}

getLength(items, function(length) {
  console.log(length)
});

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[arr.length - 1])
}

last(items, function(lastItem) {
  console.log(lastItem)
})

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x + y)
}

sumNums(1, 2, function(sum) {
  console.log(sum)
})

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x * y)
}

multiplyNums(2, 3, function(product) {
  console.log(product)
})

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  for (i = 0; i < list.length; i++) {
    if (list[i] === item) {
      return cb(true)
    } else return cb(false)
  }
}

contains('Pencil', items, function(cb) {
  console.log(cb)
})

/* STRETCH PROBLEM */

someNums = [1, 1, 2, 3, 4, 2, 5];

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  let current;
  for (i = array.length - 1; i >= 0; i--) {
    current = array[i];
    for (j = i - 1; j >= 0; j--) {
      if (current === array[j]) {
        array.splice(i, 1);
      }
    }
  }
  return cb(array);
};


removeDuplicates(someNums, function(newArray) {
  console.log(newArray)
})


