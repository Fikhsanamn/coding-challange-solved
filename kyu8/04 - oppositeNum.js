// opposite number

function opposite(number) {
  if (number == 0) {
    return 0;
  } else if (number > 0) {
    return -number;
  } else if (number < 0) {
    return Math.abs(number);
  }
}

const hasil = opposite(5);
console.log(hasil);
