//Challenge 1:Return the Sum of Two Numbers

/*function addition(num1,num2) {
   
    return num1+num2
}
 addition(4,5)// 9
 */
 
//challenge 2: convert minutes to seconds
/*function convert(minutes) {
    return minutes*60
}
console.log(convert(5));// 300
*/

//Challenge 3: Perimeter of a Rectangle
 /*function findPerimeter(length,width) {
    let sum = length+width
    return 2*sum
}
console.log(findPerimeter(6,7));// 26
*/

//Challenge 4:check negative

/*function isNegative(number){
   if (number<0){
    return true;

   }
   else
   return false
}
console.log(isNegative(2))//false
console.log(isNegative(-1))//true
*/
//challenge 5:can drive
/*function canDrive  (name,age){
    if (age>=18){
        return name+ " is old enough to drive "
    }
    else
        return name+ " is not old enough to drive yet"
};

console.log(canDrive("stella",22))// stella  is old enough to drive
*/

//challenge 6:largest number
 function findLargest (a,b,c){
    if (a>b && a>b){
        return a
    }
    else if (b>a && b>c){
        return b
    }
    else if (c>a && c>b){
        return c
    }
    else
       return "they are equal or one is not a number "
 }
 console.log(findLargest(3,4,5))//5
 console.log(findLargest(5,5,99))//99