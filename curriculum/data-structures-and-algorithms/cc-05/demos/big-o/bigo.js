/**
 * O(1)
 * This loop runs a known number of times, so without a variable, it's
 * considered to be "constant"
 */
function bigo1() {
  for (let i = 0; i < 9; i++) {
    console.log(i);
  }
}

bigo1();

/**
 * O(n)
 * This loop will run "n" times, based on the number sent into it
 * Because thats a single variable, we are going to execute only
 * "that" number of times
 */
/*
function bigoN(n) {
  for(let i=1; i<=n; i++ ) {
    console.log(i);
  }
}
bigoN(10);
*/

/**
 * O(n^2)
 * Here we go through the same array in nested loops
 * Each element `
 */

/*
function bigoNSquared(arr) {
  let n = arr.length;
  for (let indx = 0; indx < n; i++) {
    for (let jindx = 0; jindx < n; jindx++) {
      console.log(`${arr[indx]} * ${arr[jindx]} = ${arr[indx] * arr[jindx]}`);
    }
  }
}

bigoNSquared([1, 2, 3, 4, 5]);
*/

/**
 * O(n^3)
 * Here we go through the same array in 3 nested loops
 * Each element `
 */

/*
function bigoNCubed(arr) {
  let n = arr.length;

  for (let indx = 0; indx < n; indx++) {
    for (let jindx = 0; jindx < n; jindx++) {
      for (let xindx = 0; xindx < n; xindx++) {
        console.log(
          `${arr[indx]} * ${arr[jindx]} * ${arr[xindx]} = ${arr[indx] *
            arr[jindx] *
            arr[xindx]}`
        );
      }
    }
  }
}

bigoNCubed([1, 2, 3, 4, 5]);
*/

/**
 * O(n)
 * Even though we have nested for loops, we are not squared because they
 * both have separate variables. In effect, the parent loop is O(n) and
 * each of the inner loops is also O(n), so there is no "dominant"
 * to make this overly complex, so we simplify to O(n)
 */

/*
let matrix = [ [1,2,3],[4,5,6],[7,8,9] ];
for(let i=0; i<matrix.length; i++ ) {
  for(let j=0; j< matrix[i].length; j++) {
    console.log(matrix[i][j]);
  }
}
*/

/**
 * O(log(n))
 * A binary search, which continually cuts the array in half as it goes has a log(n)
 * complexity as it whittles down the iterations.
 */
/*
let binarySearch = (arr, value) => {

  let iterations = 0;
  let start = 0;
  let end = arr.length - 1;
  let middle = 0;

  while( start <= end ) {

    iterations++;

    middle = Math.floor( (start+end) / 2);

    if ( value === arr[middle] ) {
      return [true, iterations];
    }

    else if ( value > arr[middle] ) {
      start = middle + 1;
    }

    else {
      end = middle - 1;
    }

  }
  return [false,iterations];
};
console.log(binarySearch([1,2,3,4,5,6,7,8,9],6));
*/

/**
 * O(2^n)
 * Fibonacci
 * Because we're diving in 3x per number and recursively gets to the leaves this ends up being of exponential complexity
 * For a great explanation as to why ...
 * https://stackoverflow.com/questions/360748/computational-complexity-of-fibonacci-sequence/360773#360773
 */
/*
function fibonacci(n){
  if(n<=1) { return n; }
  else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

console.log(fibonacci(12));

*/
