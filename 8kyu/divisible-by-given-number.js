/* INSTRUCTIONS
Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.
*/

// MY SOLUTION
function divisibleBy(numbers, divisor){
  const divisibleNumbers = numbers.filter(num => num % divisor === 0)
  return divisibleNumbers
}