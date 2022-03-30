// npm test palindromes.spec.js

const palindromes = function (a) {
let regex = /[^a-z]/gi;
let aOnlyLetters = a.replace(regex, "").toLowerCase();
let aReversed = [...a.replace(regex, "")].reverse().join('').toLowerCase()
if (aOnlyLetters === aReversed) {
  return true
} else {
  return false
}
};

// Do not edit below this line
module.exports = palindromes;
