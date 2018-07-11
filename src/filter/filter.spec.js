import { expect } from 'chai'
import filter from './filter'

const persons = [
  { name: 'Mary', gender: 'Female' },
  { name: 'John', gender: 'Male' },
  { name: 'Chris', gender: 'Female' }
]

it('filter should to be a function', () => {
  expect(filter).to.be.a('function')
})

it('filter([1, 2], (number) => number === 1) should return [1]', () => {
  expect(
    filter([1, 2], (number) => number === 1)
  ).to.deep.equal([1])
})

it('filter([`John`, `Mary`, `Phillip`], (name) => name === `Phillip`) should return [`Phillipe`]', () => {
  expect(
    filter(['John', 'Mary', 'Phillip'], (name) => name === 'Phillip')
  ).to.deep.equal(['Phillip'])
})

it('filter([1, 2, 3], (item, index) => index === 0) should return [1]', () => {
  expect(
    filter([1, 2, 3], (item, index) => index === 0)
  ).to.deep.equal([1])
})

it('filter([1, 2, 3], (item, index) => index === 2) should return [3]', () => {
  expect(
    filter([1, 2, 3], (item, index) => index === 2)
  ).to.deep.equal([3])
})

it('filter(persons, (person) => person.gender === `Female`) should return [`Mary`, `Chris`]', () => {
  expect(
    filter(persons, (person) => {
      console.log(person.gender)
      return person.gender
    })
  ).to.deep.equal(['Mary', 'Chris'])
})
