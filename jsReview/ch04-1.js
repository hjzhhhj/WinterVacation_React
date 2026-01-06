let person = {
  name: "정희진",
  age: 17,
  hobby: "영화",
};

// let isName = "name" in person;

person.age = 20;

let array1 = new Array();
let array2 = [];
array1[0] = "첫번째";
array1[1] = 10;
console.log(array1);

let array3 = [1, 2, 3, true, "hello", null, undefined, () => {}, {}, {}];

for (let i = 0; i < array3.length; i++) {
  console.log(array3[i]);
}

// 구조분해할당

let array4 = [1, 2, 3];

const func = () => {
  console.log(name, age, hobby);
};
// let [one, two, three, four] = array4;
// console.log(one);
// console.log(two);
// console.log(three);
// console.log(four); // undefined

let person = {
  name: "홍길동",
  age: 27,
  hobby: "테니스",
};

let { age, name, hobby } = person;
console.log(age);
console.log(name);
console.log(hobby);
