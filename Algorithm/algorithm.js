var arr = [1, 3, 5, 7, 9];

var max = Math.max.apply(Math, arr); 
var min = Math.min.apply(Math, arr);

console.log("max = " + max);
console.log("min = " + min);

function Sum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}

console.log("Sum of array = " + Sum(arr));

var maxSum = Sum(arr) - min;
var minSum = Sum(arr) - max;
console.log("maxSum = " + maxSum);
console.log("minSum = " + minSum);