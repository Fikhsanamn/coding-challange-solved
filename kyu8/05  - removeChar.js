// Remove first and last character

function removeChar(str) {
  const remove = str.split("");
  remove.shift();
  remove.pop();
  return remove.join("");
}

const hasil = removeChar("coba");
console.log(hasil);
