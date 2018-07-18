const filter = (array = [], callback) => {
  let newArray = []
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      newArray.push(array[i])
    }
  }
  return newArray
}

export default filter
