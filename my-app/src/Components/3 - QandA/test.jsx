/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */



var commonCharacters = function(string1, string2) {

  let commonCharacters = [];
  let result = [];

  let arr = string1.split('')
  let arr2 = string2.split('')

  for (let i = 0; i < arr.length; i++) {
   if (commonCharacters.indexOf(arr[i]) === -1) {
    commonCharacters.push(arr[i])
   }
  }

  for (let j = 0; j < arr2.length; j++) {
   if (commonCharacters.indexOf(arr2[j]) !== -1) {
    result.push(arr2[j])
   }
  }


 let final = result.join('')
 return final;


 };