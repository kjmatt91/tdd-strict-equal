let describe = require('mocha').describe
let it = require('mocha').it
let expect = require('chai').expect
let strictEquals = require('../calculation')

describe('calculation', () => {
  describe('strictEquals', () => {
    it('returns true if the values are strictly equal to eachother', () => {
      let num1 = 5
      let num2 = 5

      expect(strictEquals(num1, num2)).to.equal(true)
    })
  })
})
