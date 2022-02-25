const removeFromArray = function(...args) {
  const array = args[0]
  return array.filter(remove => !args.includes(remove))
}

// Do not edit below this line
module.exports = removeFromArray;
