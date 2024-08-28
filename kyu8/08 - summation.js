// Grasshoper Summation

function summation(targetNum) {
  let result = 0;
  for (let i = 0; i <= targetNum; i++) {
    result += i;
  }
  return result;
}

const hasil = summation(8);
console.log(hasil);
