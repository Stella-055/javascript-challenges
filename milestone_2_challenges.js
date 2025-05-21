//challenge 1:sum of positives
/*function sumOfPositives(arr){
    let sum =0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > 0){
            sum += arr[i];
        }
    }
    return sum;
}

console.log(sumOfPositives([1, -4, 7, 12]))//20 */


// challenge 2:Find Maximum Value

/*function findMax(arr){
    let max=arr[0] ;
    for (let i=0; i < arr.length; i++){
        if (arr[i] > max){
            max = arr[i];
        }
    }
    return max;


}
console.log(findMax([1, 4, 7, 12]))//12 */


// challenge 3: Election winner
 /*function findWinner(arr){

    let winner = arr[0];
    for ( let i=0; i < arr.length; i++){
        if (arr[i].votes > winner.votes){
            winner = arr[i];
        }
    }
    return winner;
 }
 console.log (findWinner([
    { name: "Alice", votes: 50 },
    { name: "Bob", votes: 75 },
    { name: "Charlie", votes: 65 }
  ]))//{ name: "Bob", votes: 75 }
  */

  //challenge 4: Longest word

  /*function findLongestWord(arr){
    let longest =arr[0]
    for (let i=0;i<arr.length;i++){
      if(longest.length<arr[i].length){
           longest=arr[i]
      }
    }
    return longest
  }

  console.log(findLongestWord(["apple", "banana", "pear", "grapefruit"]))//grapefruit
  */
 
 
  //challenge 5:Count Properties

/*function countProperties(obj){
 let count= Object.keys(obj).length
 return count
}
console.log(countProperties({ name: "Alice", age: 25, city: "Paris" }))//3*/


//challenge6 :Filter by Length

/*function filterByLength(arr,minLength){
 let items =arr.filter(i => i.length>=minLength)
return items
}

console.log(filterByLength(["cat", "giraffe", "hippo", "dog", "elephant"], 5))// returns: ["giraffe", "hippo", "elephant"]
*/


//challenge 7:Sum of Even Numbers
/*function sumEvenNumbers(arr){
    let sum =0;
  for (let i=0; i<arr.length ;i++) {
    if(arr[i]%2===0){
       sum= sum+arr[i]
    }
  }  
 return sum
}

console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6]))// returns: 12 */


//challenge 8:Difference Between Sum of Even and Odd Numbers

function differenceEvenOdd(arr){
    let evenArray =arr.filter( i => i%2===0)
    let oddArray =arr.filter( i => i%2!==0)
    let sumEven=0
      let sumOdd=0
     for(let i=0; i<evenArray.length;i++){
        sumEven+=evenArray[i]
       }
       for(let i=0; i<oddArray.length;i++){
        sumOdd+=oddArray[i]
       }

return  sumEven-sumOdd

}
 console.log(differenceEvenOdd([1, 2, 3, 4, 5, 6]))//3