function mapToNegative(sourceArray) {
  let numArray = []
  for (let i = 0; i < sourceArray.length; i++) {
    numArray.push(-1 * sourceArray[i])
  }
  return numArray
}
