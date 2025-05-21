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
/*function findLargest (a,b,c){
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
 */

//challenge 7:BMI Calculator

/*function calculateBMI(weight,height){
   let BMI = weight/(height * height)
   if (BMI<18.5){
    return ` Your BMI is ${BMI}-under weight`
   }
   else if (BMI>=18.5 && BMI<=24.5)
   {
    return ` Your BMI is ${BMI}-normal weight`
   }
   else if (BMI>=25 && BMI<=29.9)
    {
     return` Your BMI is ${BMI}-over weight`
    }
    else
      return ` Your BMI is ${BMI}-obese`
 }
 console.log(calculateBMI(68,1.75))//22.2
 */

//challenge 8: Greeting Based On Time
/*function greetUser(name, hour){
    if (hour>=5 && hour<=11){
        return `Good Morning, ${name}!`
    }
    else if (hour>=12 && hour<=17){
        return `Good Afternoon ${name}!`
    }
    else if (hour>=18 && hour<=21){
        return `Good Evening ${name}!`
    }
    else if (hour>=22 && hour<=4){
        return `Good Night ${name}!`
    }
    else
        return "Invalid hour"
}

console.log(greetUser("stella", 10))//Good Morning, stella!
*/

//challenge 9:  FizzBuzz

/*function fizzBuzzCheck(number){

    if (number%3==0 && number%5==0){
        return "FizzBuzz"
    }
    else if (number%3==0){
        return "Fizz"
    }
    else if (number%5==0){
        return "Buzz"
    }
    else
        return number
}

console.log(fizzBuzzCheck(15))// FizzBuzz
*/

//challenge 10: Perimeter 2

/*function  Perimeter(letterl, numbernum){
 switch (letterl){
    case "s":
        return 4*numbernum;
        break;
    case "c":
        return 2*6.28*numbernum;
        break;
    default:
        return "invalid shape"
 }
}
console.log(Perimeter("s",5))// 20
*/

//challenge 11:  Sum of Even Numbers

/*function sumEvenNumbers(n){
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    }
    return sum;
}
console.log(sumEvenNumbers(6))//12 */

//challenge 12:  Multiply by Itself

/*function powerUp(num, times){
    let result=1
   
    for (let i = 0; i<times; i++) {
         result=num*result;
    }
    return result;
}
console.log(powerUp(2,3))//8
console.log(powerUp(5,0))//1 */

//challenge 13:Factorial Calculator
/*function factorial(num){
    let number=1
    for (i=1;i<=num;i++){
        number = number*i;
    }
       return number
}
console.log(factorial(4))//24*/

//challenge 14: Multiple Sum

/*function sumMultiples(n, divisor){
    let sum=0
    for (let i = 1; i <= n; i++) {
        if (i % divisor === 0) {
            sum= sum+i;
        }
    }
    return sum;
}
 
console.log(sumMultiples(10, 2))//30
*/

//challenge 15:Sum of Digits
/*function sumDigits(num) {
  let sum = 0;
  for ( let i = 0; num != 0; i++) {
    let digit1 = num % 10;
    sum = sum + digit1;
    num = Math.trunc(num / 10);
  }
  return sum;
}
  
console.log(sumDigits(123)); //6
console.log(sumDigits(4567)); // 22
 */
