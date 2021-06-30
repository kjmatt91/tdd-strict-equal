function strictEquals(nums) {
  let total = 0

  while (nums.length) { // 4 elements in the array
    total += nums.pop()// removes the last numer in the array and add to total
  }

  return total
}

module.exports = strictEquals
