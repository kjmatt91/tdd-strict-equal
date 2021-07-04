const strictEquals = (num1, num2) => {
  if (num1 == num2 && typeof num1 == typeof num2) {
    return true
  }
}

module.exports = strictEquals
