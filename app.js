// assignment 1

//Write a JavaScript function that takes a number as a parameter and prints whether it's positive, negative, or zero.

// function checkPNZ(val){
//     if (val > 0) {
//         console.log('It is a positive number'); 
//     } else if( val < 0){
//         console.log('It is a negative number');
//     } else  {
//         console.log('It is zero.');
//     }
// }

// checkPNZ(0);

// --------------------------------------------------------------------------------------------

// assignment 2

//Write a JavaScript function that takes a positive integer as a parameter and calculates its factorial using a for loop. The factorial of a number N is the product of all positive integers less than or equal to N.

// function factorial(num) {
//     let result  = 1;
//     if (num > 0){
//         for(let i = 1; i<=num; i++){
//              result *= i; 
//         }
//         console.log(result);
//     } 
// }

// factorial(4);


//---------------------------------------------------------------------------

//assignment 3

//Write a JavaScript function that takes two numbers as parameters and returns the larger one.

// function getlargestNum(valA, valB) {
//     if (valA > valB){
//         console.log(valA);
//     } else {
//         console.log(valB);
//     }
// }

// getlargestNum(140,40);


//--------------------------------------------------------------------------

// assignment 4 

// Write a JavaScript function that takes a string as a parameter and determines whether it's a palindrome or not. A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward (ignoring spaces, punctuation, and capitalization).

// function palindromeChecker(strVal) {
//     let reverseStrVal = strVal.split('').reverse('').join('');
//     console.log(reverseStrVal);

//     if (strVal == reverseStrVal){
//         console.log('This is a palindrome!');
//     } else{
//         console.log('This is not a palindrome');
//     }

// }

// palindromeChecker('abcba')


// -----------------------------------------------------------------------------

//assignment 5

//Write a JavaScript function that takes a positive integer as a parameter and prints all the prime numbers less than or equal to that integer. A prime number is a natural number greater than 1 that is not a product of two smaller natural numbers.

// function checkPrime(val){
//     let flag = 0;

//     if (val == 2){
//         console.log(val + ' is a prime number');
//     }

//     for(let i = 2; i < val; i++){
//         if (val % i == 0){
//             flag++;
//             break;
//         }

//         if(flag == 0){
//             console.log('The val ' + val + ' is a prime number');
//         }
//     }

// }

// checkPrime(2);

//-----------------------------------------------------------------

//assignment 6

//Write a JavaScript function that simulates a simple calculator. The function should take two numbers and an operator (+, -, *, or /) as parameters and perform the corresponding operation.

// function simpleCalc(valA, valB, operator) {
//     if( operator == '+'){
//         return valA + valB;
//     } else if (operator == '-'){
//         return valA - valB;
//     } else if (operator == '*'){
//         return valA * valB;
//     } else if (operator == '/'){
//         return valA / valB;
//     }
// }


// console.log(simpleCalc(10,9,'+'))
// console.log(simpleCalc(10,9,'-'))
// console.log(simpleCalc(10,9,'*'))
// console.log(simpleCalc(10,9,'/'))


// ----------------------------------------------------------------

// assignment 7

//Write a JavaScript function that takes a string as a parameter and counts the number of vowels (a, e, i, o, u) in the string.


// function checkVowels(strVal){
//     let vowels = 'aeiouAEIOU';
//     let count = 0;

//     for(let  i =0; i< strVal.length; i++){
//         if (vowels.includes(strVal[i])){
//             count++
//         }
//     }

//     return count;
// }

// console.log(checkVowels("Aminleou"))


// -----------------------------------------------------------------------------

// assignment 8 

//Write a JavaScript function that takes a positive integer as a parameter and checks if it's a perfect number. A perfect number is a positive integer that is equal to the sum of its proper divisors, excluding itself.

// function checkPerfectNum(val){
//     let sum = 0;

//     if (val < 0){
//         return false;
//     }

//     for(let i = 0; i < val; i++){
//         if (val % i == 0){
//             sum += i;
//         }
//     }
//     return sum === val;
// }

// console.log(checkPerfectNum(6));
// console.log(checkPerfectNum(24));


// ------------------------------------------------------------

// assignment 9

//Write a JavaScript function that takes a number as a parameter and prints the Fibonacci series up to that number. The Fibonacci series is a sequence of numbers in which each number is the sum of the two preceding ones.


// function checkFibonacci(val){
//     let n1 = 0;
//     let n2 = 1;
//     let nextNum;

//     console.log("fibonacci series: ");

//     for (let i = 1; i <= val; i++){
//         console.log(n1);
//         nextTerm = n1 + n2;
//         n1 = n2;
//         n2 = nextTerm;
//     }
// }

// checkFibonacci(10);


// ----------------------------------------------------------------------------------

// assignment 10;

//Write a JavaScript function that takes a positive integer as a parameter and prints its multiplication table up to 10.


// function multiplicationTable(val){
//     for(let i = 1; i < 11; i++){
//         console.log(val + ' * ' + i + ' = '+  val * i);
//     }
// }

// multiplicationTable(10);