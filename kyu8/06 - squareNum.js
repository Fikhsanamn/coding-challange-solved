function squareSum(numbers) {
  let result = 0;
  numbers.forEach((element) => {
    const square = element ** 2;
    result += square;
  });
  return result;
}

const hasil = squareSum([1, 2, 3, 4, 5]);
console.log(hasil);
