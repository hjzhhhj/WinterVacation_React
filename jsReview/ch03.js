function getArea(width, height) {
  let area = width * height;
  return area;
}

function repeat(count, callback) {
  for (let idx = 1; idx <= count; idx++) {
    callback(idx);
  }
}

repeat(5, (idx) => {
  console.log(idx);
});

repeat(5, (idx) => {
  console.log(idx * 2);
});

let caseNum = 10;
let caseStr = "20";
let caseResult = caseNum + caseStr;
console.log(castResult);

let str1 = "10";
let caseResult2 = Number(str1) + 20;
