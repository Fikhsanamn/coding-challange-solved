//  Convert boolean values to string

function boolToWord(bool) {
  if (bool === true) {
    return "Yes";
  } else {
    return "No";
  }
}

const hasil = boolToWord(true);
console.log(hasil);
