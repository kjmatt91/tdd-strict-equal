var describe = require('mocha').describe
var it = require('mocha').it
var expect = require('chai').expect
var strictEquals = require('../calculation')

describe('calculation', () => {
  describe('strictEquals', () => {
    it('returns true if the value is strictly equal to eachother', () => {
      var num1 = 5
      var num2 = 5

      expect(strictEquals(num1, num2)).to.equal(true)
    })
  })
})
