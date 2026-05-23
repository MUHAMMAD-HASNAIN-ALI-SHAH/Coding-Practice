// 2 sum
function twoSum(array, target) {
  let map = {};

  for (let i = 0; i < array.length; i++) {
    let compliment = target - array[i];

    if (map[compliment] != undefined) {
      return [map[compliment], i];
    }

    map[array[i]] = i;
  }

  return "Not Found";
}

// check palindrome for string
function checkPalindromeString(str) {
  let result = true;
  if (str.length == 0 || str.length == 1) {
    result = true;
  } else {
    let mid = Math.floor(str.length / 2);
    let left = 0;
    let right = str.length - 1;

    while (left < mid) {
      if (str[left] != str[right]) {
        result = false;
      }

      left++;
      right--;
    }
  }

  return result;
}

// check palindrome for number
function checkPalindromeNumber(num) {
  let originalNumber = num;
  let reversed = 0;

  while (num > 0) {
    let digit = num % 10;
    reversed = reversed * 10 + digit;
    num = Math.floor(num / 10);
  }

  return originalNumber == reversed;
}

// 1,2,3
// length 3
// mid 1

// reverse array
function reverseArray(arr) {
  let mid = arr.length / 2;
  let first = 0;
  let last = arr.length - 1;

  while (first < mid) {
    let temp = arr[first];
    arr[first] = arr[last];
    arr[last] = temp;

    first++;
    last--;
  }

  return arr;
}

// reverse string
function reverseString(str) {
  str = str.split("");

  let mid = Math.floor(str.length / 2);
  let first = 0;
  let last = str.length - 1;

  while (first < mid) {
    let temp = str[first];
    str[first] = str[last];
    str[last] = temp;

    first++;
    last--;
  }

  return str.join("");
}

// console.log(reverseString("abcd"));
// console.log(reverseArray([2, 7, 11, 15, -1, -2]));
// console.log(checkPalindromeNumber(12345321));
// console.log(checkPalindromeString("madam"));
// console.log(twoSum([2, 7, 11, 15], 17));

function fibonacci(n) {
  let a = 0,
    b = 1;

  for (let i = 0; i < n; i++) {
    console.log(a);
    let next = a + b;
    a = b;
    b = next;
  }
}

// fibonacci(10);

function fibonacci(n) {
  if (n <= 1) return n;

  return fibonacci(n - 1) + fibonacci(n - 2);
}

// for (let i = 0; i < 10; i++) {
//     console.log(fibonacci(i));
// }

function isPrime(n) {
  if (n <= 1) return false;

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

// console.log(isPrime(7));  // true
// console.log(isPrime(10)); // false

function findDuplicates(arr) {
  let seen = {};
  let duplicates = [];

  for (let i = 0; i < arr.length; i++) {
    if (seen[arr[i]]) {
      duplicates.push(arr[i]);
    } else {
      seen[arr[i]] = true;
    }
  }

  return duplicates;
}

// console.log(findDuplicates([1,2,3,2,4,5,1]));

function maxSubArray(arr) {
  let maxSum = arr[0];
  let currentSum = arr[0];

  for (let i = 0; i < arr.length; i++) {
    currentSum += arr[i];

    if (currentSum > maxSum) {
      maxSum = currentSum;
    }

    if (currentSum < 0) {
      currentSum = 0;
    }
  }

  return maxSum;
}

// console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));

function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

console.log(bubbleSort([3, 5, 7, 1]));
