function strictEquals(num1, num2) {
  let num1Type = typeof num1
  let num2Type = typeof num2

  if (num1 == num2 && num1Type == num2Type) {
    return true
  } 
  else {
    return false
  } 
}

module.exports = strictEquals
