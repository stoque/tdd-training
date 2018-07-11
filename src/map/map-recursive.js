const map = (array, callback) => {
  if (callback) {
    return (function mapInternal (arrayInternal, index) {
      const [head, ...tail] = arrayInternal
      return arrayInternal.length === 0 ? [] : [
        callback(head, index, array),
        ...mapInternal(tail, index + 1)
      ]
    })(array, 0)
  }
  return [...array]
}

export default map
