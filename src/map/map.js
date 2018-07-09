const map = (array, callback) => {
  let newArray = []
  if (callback) {
    array.forEach((item) => newArray.push(callback(item)))
  } else {
    newArray = [...array]
  }
  return newArray
}

export default map
