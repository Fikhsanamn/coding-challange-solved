// Reversed String

function solution(str) {
  const reverse = str.split("").reverse().join("");
  console.log(reverse);
}

solution("Javascript");
solution("world");
solution(" ");

function reversed2(str) {
  const reverse = str
    .split("")
    .reduce((item, currentAplh) => currentAplh + item, "");
  console.log(reverse);
}

reversed2("Golang");
