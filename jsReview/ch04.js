// 1 객체 생성
let obj1 = new Object();
obj1.name = "Heejin";

let obj2 = { name: "Heejin" };
obj2.name = "아이브";
obj2.age = 17;
delete obj2.age;
obj2["height"] = 170;

let obj3 = new Date();

if (obj1 == obj2) {
  console.log("같다");
} else {
  console.log("다르다");
}
