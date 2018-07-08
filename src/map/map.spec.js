import { expect } from 'chai'
import map from './map'

const numbers = [1, 2, 3]

it('shoud map to be a function', () => {
  expect(map).to.be.a('function')
})

it('should map(numbers) return a different array', () => {
  expect(map(numbers)).not.equal(numbers)
})

it('should map(numbers) return [1, 2, 3]', () => {
  expect(map(numbers)).to.deep.equal(numbers)
})
