// 1. 'name' 이라는 변수를 선언하고 자신의 이름을 할당하세요

let name = '오민욱'

console.log(name)

// 2. 주어진 변수 'name'에 철수를 재할당 하세요

let name = "영희"

name = '철수'

console.log(name)


// 3. 주어진 변수 fruits에 "사과", "바나나", "파인애플" 을 담아주세요

let fruits = []

fruits = ["사과", "바나나", "파인애플"]

console.log(fruits)

// 4. 주어진 fruits 배열에서 마지막 요소를 꺼내 newFruits에 넣어주세요

let fruits = ["사과", "바나나", "파인애플"]

let newFruits = []

fruits.push(fruits[fruits.length - 1])

console.log(newFruits)

// 5.학생들의 이름이 담긴 students 배열이 있습니다.
// 배열에서 2번째 요소까지의 데이터들을 뽑아 새로운 배열을 만드세요

let students = ["철수", "영희", "훈이", "짱구", "유리"]

let newArr = []

newArr = students.slice(0, 3)

console.log(newArr)

// 6. 주어진 fruits 배열의 모든 요소에 "맛있는" 이라는 문자열을 추가하세요

let fruits = ["사과", "바나나"]

fruits = "맛있는" + fruits[0]
fruits = "맛있는" + fruits[1]

console.log(fruits)

// 7. 상수 number는 핸드폰 번호가 담긴 문자열입니다.
// 해당 문자열을 "010", "1234", "5678" 로 나눈 배열을 만드세요

const number = "01012345678"

let arr = []

arr = number.push(number.slice(0, 3))
arrr = number.push(number.slice(3, 7))
arr = number.push(number.slice(7, 11))

console.log(arr)

// 주어진 student 객체에 
// 'name' 이라는 키를 만들고 "철수" 를 할당하세요

let students = {}

student.name = '철수'

console.log(students)


// student 와 school 두 개의 객체가 있습니다.
// student 객체에 school이라는 객체를 할당해야 합니다.

const student = {
	name: "철수",
	age: 8,
};

const school = {
	name: "다람쥐초등학교",
	teacher: "다람이",
}

students.school = school

 console.log(student)

 // 주어진 student는 "철수"에 대한 정보를 모아둔 객체입니다.
 // 그런데 철수와 관련이 없는 drink라는 키가 있네요
 // student에서 {drink : "사이다"}를 삭제해 주세요

 let student = {
	name: "철수",
	drink: "사이다"
};

delete student.drink

console.log(student)


// 주어진 classmates는 "다람쥐초등학교" 학생들의 정보를 모아둔 배열입니다.
// 그런데 자세히 보니 "영희" 학생의 정보가 잘못 입력되었습니다.
// "영희"의 school 값을 "다람쥐초등학교"로 바꿔주세요

const classmates = [
	{
		name: "철수",
		age: 8,
		school: "다람쥐초등학교"
	},
	{
		name: "영희",
		age: 8,
		school: "토끼초등학교"
	},
	{
		name: "짱구",
		age: 8,
		school: "다람쥐초등학교"
	}
];

classmates[1].school = "다람쥐초등학교"


// 주어진 변수 str과 number의 데이터 타입을 확인해 주세요

let str = "3"
let number = 3

typeof str
typeof number

console.log(typeof str)
console.log(typeof number)


// 주어진 변수 array과 object의 데이터 타입을 확인하세요

let array = []
let object = {}

typeof array
typeof object

Array.isArray(array)
Array.isArray(object)

// num에 데이터를 string으로 변경 후, str에 할당해 주세요

let num = 24
let str 

str = String(num)


// 각각의 연산 결과가 무엇인지 알아보세요

1 + "1" === 11

1 - "1" === 0

"1" + "1" === 11

1 * "1" === NaN

3 * "A" === NaN

1 + 1 + '1' === 21

'1' + 1 + 1 === 12

"11" - 1 === 10

"11" + 1 === 111

"홍" + "길동" === "홍길동"

20 === "20" === false

20 == "20" === true

!true === false

// 각각의 연산 결과가 무엇인지 알아보세요


(20 >= 10) && (20 === 10) === false

(20 === 10) || (10 === 10) === true

// input1 과 input2에는 boolean 타입인 true와 false가 입력됩니다.
// 둘 중에 하나라도 true이면 "true"
// 두 개 모두 false면 "false" 라는 문구를 띄워주세요

function boolean(input1, input2) {
	if("조건 1") {
		console.log("결과 1")
	}
}

if(input1 === true || input2 === true){
    console.log(true)    
}
else if(input1 === false && input2 === false){
    console.log(false)
}

// 입력되는 숫자가 짝수인지 홀수인지 구별하는 함수를 만들려고 합니다.
// 입력된 값이 "짝수"이면 "Even", 홀수이면 "Odd", 0이면  "Zero"라는 문구를 띄워주세요

function evenOdd(num) {

	if (조건1) {
		console.log("");
	} else if (조건2) {
		console.log("");
	} else if (조건3) {
		console.log("");
	}
}

if(num === 0){
    console.log("zero")
}
else if(num % 2 === 1){
    console.log("Odd")
}
else {
    console.log("Even")
}

// 입력되는 온도에 따라 문구를 띄워주는 온도계 함수를 만들려고 합니다.
// 입력된 값에 따라 알맞은 문구를 띄워주세요
// 18이하면 "조금 춥네요"
// 19 ~ 23이면 "날씨가 좋네요"
// 24이상이면 "조금 덥습니다"


function temperature(num){
	if("조건 1") {
		console.log("결과 1")
	}
}

 if(num <= 18) {
    console.log("조금 춥네요")
 }
 else if(num <= 23){
    console.log("날씨가 좋네요")
 } 
 else if(num <= 24){
     console.log("날씨가 덥습니다")
 }

 // 입력되는 달에 따라 각 달에 며칠이 있는지 보여주는 함수를 만들려고 합니다.
 // 각 조건에 해당하는 알맞은 값을 입력해주세요

 
function days(month) {
	if("조건 1") {
		console.log("결과 1")
	}
}

// 1월 : 31일
// 2월 : 28일
// 3월 : 31일
// 4월 : 30일
// 5월 : 31일
// 6월 : 30일
// 7월 : 31일
// 8월 : 31일
// 9월 : 30일
// 10월 : 31일
// 11월 : 30일
// 12월 : 31일

if(month === 2){
    console.log("28")
}
else if(month === 1 && month === 3 && month === 5 && month === 7 && month === 8 && month === 10 && month === 12) {
    console.log("31")
}
else {
    console.log("30")
}


// 숫자 2개와 연산자를 입력 받아 알맞게 계산하는 미니 계산기 함수를 만들어주세요
// num1과 num2는 숫자열, operator는 문자열로 입력됩니다.
// operator "+", "-", "/", "*" 이외의 다른 값이 들어온다면
// "올바른 입력이 아닙니다" 라는 문구를 띄워주세요

function calculator(num1, num2, operator){
	if (operator === "+") {
		console.log(num1 + num2)

	} else if(operator === "-") {
		console.log(num1 - num2)
	} else if(operator === "*") {
        console.log(num1 * num2)
    } else if(operator === "/") {
        console.log(num1 / num2)
    } else {
        console.log("올바른 입력이 아닙니다.")
    }
}

// 입력되는 수에 따라 0부터 해당 수까지의 합을 구하려고 합니다.

function sum(num) {
	let count = 0;
}

for(let i = 0; i <=num; i++){
    count += count[i]
}

// 문자열에서 "a"가 몇 변 등장하는지 횟수를 구하는 함수를 만들려고 합니다.,
// 반복문들 이용해 "a"의 등장 횟수를 변수 "count"에 할당하세요

function countLetter(str) {
	let count = 0;
}

for(let i = 0; i<= str.length; i++){
    if(str[i] === "a") {
        count += 1;
    }
}
