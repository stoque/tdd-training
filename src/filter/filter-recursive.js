const filter = (array = [], callback) => {
  return (function innerFilter (innerArray, index) {
    const [head, ...tail] = innerArray
    return innerArray.length === 0
      ? []
      : (callback(head, index, array) ? [head] : []).concat(innerFilter(tail, index + 1))
  })(array, 0)
}

export default filter
