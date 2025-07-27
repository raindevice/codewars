/* INSTRUCTIONS
Complete the solution so that it reverses all of the words within the string passed in.

Words are separated by exactly one space and there are no leading or trailing spaces.
*/

// SOLUTION
function reverseWords(str){
  let arr = str.split(' ')
  let reverseArrAndJoin = arr.reverse().join(' ')
  str = reverseArrAndJoin.toString()
  return str;
}