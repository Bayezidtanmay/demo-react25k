/* 

Create two variables:
num1 with the value "10".
num2 with the value "notANumber".
Convert num1 and num2 using parseFloat().
Print the sum of num1 and num2 using console.log().
(Note: If one value is NaN, the result will be NaN, which will be printed automatically.)
Example output:
NaN (if the addition involves invalid input).
10 (if both inputs are valid numbers).

*/

let num1 = 10;
let num2 = "notANumber";

let convert_num1 = parseFloat(num1);
let convert_num2 = parseFloat(num2);
let sum = convert_num1 + convert_num2;
console.log(sum);
