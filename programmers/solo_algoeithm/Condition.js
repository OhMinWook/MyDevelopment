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