function mapToNegative(sourceArray) {
  let numArray = []
  for (let i = 0; i < sourceArray.length; i++) {
    numArray.push(-1 * sourceArray[i])
  }
  return numArray
}

function mapToNoChange(sourceArray) {
  let numArray = []
  for (let i = 0; i < sourceArray.length; i++) {
    numArray.push(sourceArray[i])
  }
  return numArray
}

function reduceToTotal(sourceArray, startingPoint) {
  let total = startingPoint
  for (let i = 0; i < sourceArray.length; i++) {
    total = total + sourceArray[1]
  }
}
