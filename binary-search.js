const arr = [1,2,3,4,5,6,7,8,9,10]

function binarySearch(arr, item) {
    let start = 0;
    let end  = arr.length;
    let iterations = 0;

    while (start <= end) {
        iterations++;
        //math.floor is mandatory since mid variable may be float
        const mid = Math.floor((start + end) / 2);
        const guessNumber = arr[mid];

        if (guessNumber === item) {
            return `The element has been found at index: ${mid}. \n Number of iterations: ${iterations}`
        }
        if (guessNumber > item) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }

    return 'element was not found in array';
}

// some tests

console.log(binarySearch(arr, 6))
console.log(binarySearch(arr, 7))
console.log(binarySearch(arr, 4))
console.log(binarySearch(arr, 2))
console.log(binarySearch(arr, 11))