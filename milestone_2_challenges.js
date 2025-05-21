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

function findMax(arr){
    let max=arr[0] ;
    for (let i=0; i < arr.length; i++){
        if (arr[i] > max){
            max = arr[i];
        }
    }
    return max;


}
console.log(findMax([1, 4, 7, 12]))//12