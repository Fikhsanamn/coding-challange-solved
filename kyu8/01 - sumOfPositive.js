function positiveSum(arr) {
  return arr
    .filter((number) => number > 0)
    .reduce((total, currentValue) => {
      return total + currentValue;
    }, 0);
}

positiveSum([1, 2, 3, 4, 5]); // 15
positiveSum([1, -2, 3, 4, 5]); // 13
positiveSum([]); // 0
positiveSum([-1, -2, -3, -4, -5]); // 0
positiveSum([-1, 2, 3, 4, -5]); // 9
