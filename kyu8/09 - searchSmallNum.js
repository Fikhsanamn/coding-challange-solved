// Find the smallest number in an array

function searchSmall(num) {
  const hasil = num.forEach((element) => {
    let smallest = element;
    if (element < smallest) {
      smallest = element;
    }
    return smallest;
  });
  console.log(hasil);
}

searchSmall([78, 56, 232, 12, 8]);

const hasil = searchSmall([78, 56, 232, 12, 8]);

console.log(hasil);

// Second Way, google
function findSmallestInt(arr) {
  return Math.min(...arr);
}

console.log(findSmallestInt([78, 56, 232, 12, 8]));
