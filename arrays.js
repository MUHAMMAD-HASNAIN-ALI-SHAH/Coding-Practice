// *********************************** reverseArray ******************************* //
function reverseAnArray(arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;

    start++;
    end--;
  }

  return arr;
}
// *********************************** max/min in array ******************************* //
function maxMinInArray(arr) {
  let max = -Infinity;
  let min = Infinity;

  for (let num of arr) {
    if (num > max) {
      max = num;
    }

    if (num < min) {
      min = num;
    }
  }

  console.log(max);
  console.log(min);
}

// *********************************** dublicates in array ******************************* //
function dublicatesInArray() {
  let arr = [1, 2, 2, 3, 4, 4, 5];
  const set = new Set();

  for (let i = 0; i < arr.length; i++) {
    if (set.has(arr[i])) {
      console.log(arr[i]);
    } else {
      set.add(arr[i]);
    }
  }
}

// *********************************** dublicates in string ******************************* //
function dublicatesInString() {
  let str = "aabbcd";
  let set = new Set();

  for (let i = 0; i < str.length; i++) {
    if (set.has(str[i])) {
      console.log(str[i]);
    } else {
      set.add(str[i]);
    }
  }
}

// *********************************** dublicates in string ******************************* //
function reverseString() {
  let str = "aabbcd";
  let set = new Set();

  for (let i = 0; i < str.length; i++) {
    if (set.has(str[i])) {
      console.log(str[i]);
    } else {
      set.add(str[i]);
    }
  }
}

// *********************************** reverse a string ******************************* //
function reverseString() {
  let str = "javascript";

  str = str.split("");
  let start = 0;
  let end = str.length - 1;

  while (start < end) {
    let temp = str[start];
    str[start] = str[end];
    str[end] = temp;

    start++;
    end--;
  }

  console.log(str.join(""));
}

// **************************** calculate frequency of an element *******************************//
function frequencyOfElement() {
  let arr = [1, 2, 2, 2, 4, 4, 5, 5, 5, 5];

  let frequency = 0;
  let frequencyElement = 5;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == frequencyElement) {
      frequency++;
    }
  }

  console.log(frequency);
}

// ********************* find second largest element *******************************//
function secondLargestNumber() {
    let arr = [1,2,3,4,5];

    let firstLargest = arr[0];
    let secondLargest;

    for(let i of arr){
        if(firstLargest<i){
            secondLargest = firstLargest;
            firstLargest = i;
        }
    }

    console.log(secondLargest)
}

// ******************************* find missing element *********************************//
function missingNumber() {
    let arr = [1,2,4,5];

    let n = arr.length + 1;
    let actualSum = n*(n+1)/2;
    let currSum = 0;

    for(let ele of arr){
        currSum += ele;
    }
    
    console.log(actualSum-currSum);
}

// ********************************* binary serach *********************************//
function binarySearch() {
    let arr = [1,2,3,4,5];

    let searchEle = 4;
    let left = 0;
    let right = arr.length-1;

    while(left<right){
        let mid = Math.floor((left + right) / 2);

        if(arr[mid] == searchEle){
            console.log(mid);
            return
        } else if(arr[mid]<searchEle){
            left = mid+1;
        } else {
            right = mid-1;
        }
    }

    console.log("Not Found")   
}

// ******************************** Kadane's Algorithm ********************************//
function binarySearch() {
     let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
        
        let currSum = arr[0];
        let maxSum = arr[0];
        
        for(let i=1 ; i<arr.length ; i++){
            currSum = Math.max(arr[i], arr[i] + currSum);
            maxSum = Math.max(maxSum, currSum);
        }
        
        console.log(maxSum);

}
