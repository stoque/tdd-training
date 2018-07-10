const map = (array, callback) => {
  let newArray = []
  if (callback) {
    array.forEach((item, index, array) => newArray.push(
      callback(item, index, array)
    ))
  } else {
    newArray = [...array]
  }
  return newArray
}

export default map
