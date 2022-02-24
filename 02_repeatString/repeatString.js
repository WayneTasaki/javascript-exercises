const repeatString = function(string, num) {
  if (num >= 0) {
    let newString = string.repeat(num);
    return newString;
  } else return "ERROR";
};

// Do not edit below this line
module.exports = repeatString;
