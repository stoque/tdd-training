const filter = (array, callback) => {
  return (function innerFilter (innerArray, index) {
    const [head, ...tail] = innerArray
    if (callback(head, index)) {
      return innerArray.length === 0 ? [] : [
        head,
        ...innerFilter(tail, index + 1)
      ]
    }
    return innerArray.length === 0 ? [] : [
      ...innerFilter(tail, index + 1)
    ]
  })(array, 0)
}

export default filter
