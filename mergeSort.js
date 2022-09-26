function mergeSort(array) {
  if (array.length < 2) return array;

  const half = Math.round(array.length / 2);
  const left = mergeSort(array.slice(0, half));
  const right = mergeSort(array.slice(half));

  return merge(left, right);
}

function merge(left, right) {
  let merged = [];

  while (left.length > 0 && right.length > 0) {
    left[0] < right[0] ? merged.push(left.shift()) : merged.push(right.shift());
  }

  return merged.concat(left, right);
}
