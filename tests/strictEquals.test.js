let expect = require('chai').expect
let calculation = require('../strictEquals')

describe('calculation', () => {
  it('returns true if the values are strictly equal to eachother', () => {
    let num1 = 5
    let num2 = 5

    expect(calculation(num1, num2)).to.equal(true)
  })
})
