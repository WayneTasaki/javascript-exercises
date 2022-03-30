// npm test fibonacci.spec.js

var fibonacci_series = function (n) 
{
  if (n==1) 
  {
    return [0, 1];
  } 
  else 
  {
    var s = fibonacci_series(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
};

const fibonacci = function(n) {
  if (n < 0) {
    return 'OOPS'
  } else {
  let num = fibonacci_series(n)
  return num.pop()
  }
};



// Do not edit below this line
module.exports = fibonacci;
