// 배열에 length 기능을 사용하면 배열 안에 몇 개의 데이터가 잇는지를 확인할 수 있다.
// 배열 안에 데이터들은 index 번호를 가지며, "0" 번째 index 부터 시작한다.
// index 값은 항상 length 값보다 1이 작다.
// 배열의 index 로 해당 데이터에 접근할 수 있다. ex) index[0] = 1

// 배열 맨 뒤에 데이터 추가 Array.push()
// 배열 맨 앞에 데이터 추가 Array.inshift()

// 배열 맨 뒤의 데이터 삭제 Array.pop
// 배열 맨 앞의 데이터 삭제 Array.shift

// 데이터의 index 값 반환 Array.indexOf() - 있다면 해당 인덱스 번호를 반환하고, 없다면 -1을 반환한다.
// 데이터의 존재 여부 반환(true/ false) Array.includes() - 데이터가 있으면 true 값을 반환, 없다면 false를 반환한다.


// 주어진 변수 fruits에 사과, 바나나, 파인애플을 담아주세요
let fruits = []
// 1. 초깃값으로 직접 해당 데이터를 빈 배열에 적어준다.
// 2. 빈 배열을 만든 후 push를 이용해 데이터를 넣어준다.
fruits.push("사과")
fruits.push("바나나")
fruits.push("파인애플")

// 주어진 fruits 배열에서 마지막 요소를 꺼내 newFruits에 넣어주세요

let fruits = []

let newFruits = []
const lastFruits = fruits[fruits.length - 1]
newFruits.push(lastFruits)
// length-1를 이용해 해당 인덱스 값에 접근하도록 한다.
// push를 이용해 newFruits 배열에 넣어준다.

newFruits[0] = lastFruits
// 해당 인덱스 값에 데이터를 직접 할당해 줄 수 있다.
// 하지만 웬만하면 push로 넣어주는 게 좋다.


// ==============================================================================================================================
// 객체
// 데이터들을 종류에 맞게 분류하여 저장
// 중괄호 { 로 열어 중괄호 } 닫는다.
// 중괄호 사이에 있는 데이터들이 쉼표(,)로 구분되어 진다.
// 객체는 key와 value로 데이터를 저장하는데
// key는 데이터의 이름, value는 데이터의 값을 의미한다.
// 객체의 데이터를 조회할 때는 객체의 key 값을 이용해 value값을 조회할 수 있다. obj.name, obj.school  obj.school.name .....
// 객체 데이터 추가 obj.like = "game"
// 이미 key값이 있으면 value 값만 변경이 가능하다.
// 객체 데이터 삭제 delete obj.like 하면 그에 해당하는 key와 value가 사라지고 빈 객체 값만 남게 된다.

// 주어진 student 객체에 name이라는 키를 만들고 "철수"를 할당하세요
let student = {"name" : "철수"}
student.name // 철수에 접근할 수 있다.

let student = {}
// 해당하는 키 값에 value값을 넣어주면 된다.
student.name = "철수"


// student와 school 두 개의 객체가 있습니다.fruits
// student 객체에 school이라는 객체를 할당해야 합니다.

const student = {
	name: "철수",
	age: 8,
};

const school = {
	name: "다람쥐초등학교",
	teacher: "다람이",
}

// key값에 넣어 줄 school이라는 객체를 통째로 넣어줄 수 있다.
// 앞의 school과 뒤의 school 값은 서로 별개의 값이다.
student.school = school

