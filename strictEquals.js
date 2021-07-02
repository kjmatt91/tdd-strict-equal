// function strictEquals(num1, num2) {
//   console.log(num1.value, typeof num2)

//   if (num1 == num2 && typeof num1 == typeof num2) return true
// }

const strictEquals = (num1, num2) => {
  if (num1 !== num2) {
    return false
  }
  else {
    return true
  }
}

module.exports = strictEquals

// Object.is (25,25)
