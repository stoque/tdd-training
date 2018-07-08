import { expect } from 'chai'
import hello from './hello-world'

it('should hello to be a function', () => {
  expect(hello).to.be.a('function')
})

it('should hello() return `hello world', () => {
  expect(hello()).equal('hello world')
})