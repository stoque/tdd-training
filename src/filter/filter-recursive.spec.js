import { expect } from 'chai'
import filter from './filter-recursive'

it('filter should to be a function', () => {
  expect(filter).to.be.a('function')
})

it('filter() should return []', () => {
  expect(filter()).to.deep.equal([])
})

it('filter([1, 2, 3], (item) => item === 1) should return [1]', () => {
  expect(
    filter([1, 2, 3], (item) => item === 1)
  ).to.deep.equal([1])
})

it('filter([1, 2, 3], (item, index) => index > 0) should return [2, 3]', () => {
  expect(
    filter([1, 2, 3], (item, index) => index > 0)
  ).to.deep.equal([2, 3])
})

it('filter[2, 3, 4, 4, 5, 5], (item, index, array) => item === array[index + 1] should return [4, 5]', () => {
  const result = filter([2, 3, 4, 4, 5, 5], (item, index, array) => item === array[index + 1])
  expect(result).to.deep.equal([4, 5])
})

it('filter in array persons by gender male should return Lucas and Henrique', () => {
  const persons = [
    { name: 'Lucas', gender: 'male' },
    { name: 'Vitória', gender: 'female' },
    { name: 'Ana', gender: 'female' },
    { name: 'Henrique', gender: 'male' }
  ]
  const men = filter(persons, (person) => person.gender === 'male')
  const result = [{
    name: 'Lucas',
    gender: 'male'
  }, {
    name: 'Henrique',
    gender: 'male'
  }]
  expect(men).to.deep.equal(result)
})
