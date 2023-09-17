function sumFor (arrayData) {
  let total = 0;
  for (let i = 0; i < arrayData.length; i++) {
    total += arrayData[i];
  }
  return total;
}

function sumWhile (arrayData) {
  let deepCopy = [... arrayData]
  let total = 0;
  while (deepCopy.length > 0) {
    total += deepCopy.pop()
  }
  return total
}

function sumRecursion (arrayData) {
  let deepCopy = [... arrayData]
  if (deepCopy.length > 0){
    let total = deepCopy.pop();
    return total + sumRecursion(deepCopy);
  }
  return 0;
}

function sumTheSimpleWay (arrayData) {
  let total = arrayData.pop();
  _.map(arrayData, function (value) {total += value});
  return total;
}

const ArrayValue = [5, 9, 11, 15];

console.log(sumFor(ArrayValue));
console.log(sumWhile(ArrayValue));
console.log(sumRecursion(ArrayValue));
console.log(sumTheSimpleWay(ArrayValue));
