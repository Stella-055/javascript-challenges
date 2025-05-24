# Basic Data Structures
These challenges will help you to solidify your understanding of basic data structures in JavaScript.
**Table of Contents** 

- [Basic Data Structures](#basic-data-structures)
  - [Instructions](#instructions)
    - [Pro Tips](#pro-tips)
  - [1. Sum of Positives](#1-sum-of-positives)
  - [2. Find Maximum Value](#2-find-maximum-value)
  - [3. Election winner](#3-election-winner)
  - [4. Longest word](#4-longest-word)
  - [5. Count Properties](#5-count-properties)
  - [6. Filter by Length](#6-filter-by-length)
  - [7. Sum of Even Numbers](#7-sum-of-even-numbers)
  - [8.  Difference Between Sum of Even and Odd Numbers](#8--difference-between-sum-of-even-and-odd-numbers)
  - [9. Count Truthy](#9-count-truthy)
  - [10. Average of Numbers](#10-average-of-numbers)
  - [11. Linear Search](#11-linear-search)
  - [12. Reverse Linear Search](#12-reverse-linear-search)
  - [13. Linear Search All Indices](#13-linear-search-all-indices)
  - [14. Count Occurrences](#14-count-occurrences)
  - [15. Remove Duplicates](#15-remove-duplicates)
  - [16. Most Frequent](#16-most-frequent)

## Instructions

- Create a file called `milestone_2_challenges.js`
- Write the solution to each challenge in that file.
- Separate each challenge’s code clearly with comments that include the challenge title or number. For example:

```js
// Challenge 1: Sum of two numbers
// Your solution here

// Challenge 2: BMI Calculator
// Your solution here
```

- Make sure your code is neatly formatted and easy to read. Use prettier to format your code - `prettier --write filename.js`
- Name your functions exactly as described in each challenge, if a challenge has not provided a function name, come up with a suitable name.
- Always run your code to ensure it works as expected.
- Once you're done, push your work to GitHub and share the link to the repo with me for a review.

### Pro Tips

- Commit often with clear messages (e.g., "Completed Challenge 3: Sum of Even Numbers").
- Comment your logic briefly if you want, but don’t overdo it.

## 1. Sum of Positives
Write a function called `sumOfPositives` that takes an array of numbers and returns the sum of all the positive numbers in the array.

```js
sumOfPositives([1, -3, 5, -2, 9, -8]
); // 15
```

## 2. Find Maximum Value
Write a function called `findMax` that takes an array of numbers and returns the maximum number in the array. Don’t use built-in functions like `Math.max()`.
```js
findMax([3, 7, 2, 9, 5])
// returns: 9
```

## 3. Election winner
Write a function called `findWinner` that takes an array of objects. Each object has two properties: `name` (string) and `votes` (number). The function should return the object representing the candidate with the highest number of votes. Assume there’s always one clear winner (no ties).
```js
const candidates = [
  { name: "Alice", votes: 50 },
  { name: "Bob", votes: 75 },
  { name: "Charlie", votes: 65 }
];

findWinner(candidates)
// returns: { name: "Bob", votes: 75 }

```

## 4. Longest word
Write a function called `findLongestWord` that takes an array of strings and returns the longest string in the array. If there are multiple words with the same maximum length, return the first one that appears.

```js
findLongestWord(["apple", "banana", "pear", "grapefruit"])
```
Hint:
- The length of a string refers to the number of characters in the string, for example, "john" has a length of 4.
- You can get the length of string using the `.length` property, for example, `'john'.length` returns 4.

```js
findLongestWord(["apple", "banana", "pear", "grapefruit"])
// returns: "grapefruit"
```

## 5. Count Properties
Write a function called `countProperties` that takes an object and returns the number of properties (keys) it has.

```js
countProperties({ name: "Alice", age: 25, city: "Paris" })
// returns: 3
```

## 6. Filter by Length
Write a function called `filterByLength` that takes an array of strings and a number `minLength`. Return a new array containing only the strings that are equal to or longer than `minLength`.

```js
filterByLength(["cat", "giraffe", "hippo", "dog", "elephant"], 5)
// returns: ["giraffe", "hippo", "elephant"]
```

## 7. Sum of Even Numbers
Write a function called `sumEvenNumbers` that takes an array of numbers and returns the sum of all even numbers in the array.

```js
sumEvenNumbers([1, 2, 3, 4, 5, 6])
// returns: 12  // because 2 + 4 + 6 = 12
```

## 8.  Difference Between Sum of Even and Odd Numbers
Write a function called `differenceEvenOdd` that takes an array of numbers and returns the difference between the sum of even numbers and the sum of odd numbers.

```js
differenceEvenOdd([1, 2, 3, 4, 5, 6])
// returns: 3  // (2 + 4 + 6) - (1 + 3 + 5) = 12 - 9 = 3
```

## 9. Count Truthy
Write a function called `countTruthy` that takes an object and returns the number of properties that have truthy values.
```js
countTruthy({ a: 0, b: "hello", c: false, d: 42, e: null })
// returns: 2  // "hello" and 42 are truthy
```

## 10. Average of Numbers
Write a function called `average` that takes an array of numbers and returns their average. Return `0` if the array is empty.
```js
average([2, 4, 6, 8])
// returns: 5

average([])
// returns: 0
```

## 11. Linear Search
Write a function called `linearSearch` that takes an array and a value. It should return the index of the first occurrence of the value in the array. If the value is not found, return `-1`.

```js
linearSearch([5, 3, 7, 1, 4], 7)  // returns: 2
linearSearch([5, 3, 7, 1, 4], 10) // returns: -1
```

## 12. Reverse Linear Search
Write a function called `reverseLinearSearch` that takes an array and a value. It should return the index of the last occurrence of the value in the array. If the value is not found, return `-1`.

```js
reverseLinearSearch([5, 3, 7, 1, 4, 7], 7)  // returns: 5
reverseLinearSearch([5, 3, 7, 1, 4], 10)    // returns: -1
```

## 13. Linear Search All Indices
Write a function called `linearSearchAll` that takes an array and a value. It should return an array of all the indices where the value appears. If the value isn’t found, return an empty array.

```js
linearSearchAll([5, 3, 7, 1, 4, 7], 7)  // returns: [2, 5]
linearSearchAll([5, 3, 7, 1, 4], 10)    // returns: []
```

## 14. Count Occurrences
Write a function called `countOccurrences` that takes an array of strings and returns an object where each key is a string from the array and the corresponding value is the number of times it appears.

```js
countOccurrences(["apple", "banana", "apple", "orange", "banana", "apple"])
// returns: { apple: 3, banana: 2, orange: 1 }
```

## 15. Remove Duplicates
Write a function called `removeDuplicates` that takes an array and returns a new array with all duplicate values removed. Preserve the original order of elements.

```js
removeDuplicates([1, 2, 3, 2, 4, 1, 5])
// returns: [1, 2, 3, 4, 5]
```

## 16. Most Frequent
Write a function called `mostFrequent` that takes an array and returns the value that appears most frequently. If there’s a tie, return any one of the most frequent values.

```js
mostFrequent([1, 2, 2, 3, 3, 3, 4])
// returns: 3

mostFrequent(["apple", "banana", "apple", "orange", "banana", "apple"])
// returns: "apple"
```