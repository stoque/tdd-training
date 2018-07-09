import { expect } from 'chai'
import map from './map'

const numbers = [1, 2, 3]
const names = ['John', 'Mary', 'Robert']

it('map should to be a function', () => {
  expect(map).to.be.a('function')
})

it('map(numbers) should return [1, 2, 3]', () => {
  expect(map(numbers)).to.deep.equal(numbers)
})

it('map(names) should return [`John`, `Mary`, `Robert`]', () => {
  expect(map(names)).to.deep.equal(names)
})

it('map(numbers) should return a different array', () => {
  expect(map(numbers)).not.equal(numbers)
})

it('map(numbers, (item) => item + 1) should return [2, 3, 4]', () => {
  expect(map(numbers, (item) => item + 1)).to.deep.equal([2, 3, 4])
})

it('map(numbers, (item) => item + 5) should return [6, 7, 8]', () => {
  expect(map(numbers, (item) => item + 5)).to.deep.equal([6, 7, 8])
})

it('map(names, (item) => item.replace(/\\w+/, `Nobody`)) return [`Nobody`, `Nobody`, `Nobody`]', () => {
  expect(
    map(names, (item) => item.replace(/\w+/, 'Nobody'))
  ).to.deep.equal(['Nobody', 'Nobody', 'Nobody'])
})
