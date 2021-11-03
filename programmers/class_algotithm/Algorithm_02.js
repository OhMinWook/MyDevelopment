// 조건문
// 조건이 일치할 떄만 로직을 실행하는 문법\
// if() 로 시작하며, 소괄호 () 안에 조건식이 들어간다.
// 조건식이 일치할 경우(= true) 로직이 실행된다.
// 조건식이 일치하지 않을 경우(= false)에는 예외 (else) 문법의 로직이 실행된다.(예외 처리)
// 조건문의 조건이 a > 1인데 a === 1이라면 else의 처리가 'a가 1보다 작다' 라면 알맞은 답이 나오지 않는다.
// 따라서 else 문법에 if 를 추가로 적용할 수 있다.
// 이 때 반드시 소괄호 () 에 조건식을 함께 넣어야 한다.
// 대입 값이 어떠냐에 따라서 위에서 순차적으로 알맞은 조건에 해당할 때 로직을 실행하게 된다.


// input1 과 input2에는 boolean 타입인 true, false 가 입력됩니다.
// 둘 중에 하나라도 true 라면 "true"
// 두 개 모두 false 라면 "false" 라는 문구를 띄워주세요
function boolean(input1, input2) {

    input1 === false
    input2 === true

    if(input1 === false && input2 === false) {
        console.log(false)
    }
	else if(input1 === true || input2 === true) {
        console.log(true)
    }
}

// 입력되는 숫자가 짝수인지 홀수인지 구별하는 함수를 만들려고 합니다.
// 입력된 값이 "짝수" 이면 "Even", "홀수" 이면 "Odd", 0이면 "Zero"라는 문구를 띄워주세요
function evenOdd(num) {

    if(num === 0) {
        console.log("zero")
    } else if(num % 2 === 1){
        console.log("Odd")
    } else if(num % 2 === 0) {
        console.log("Even")
    }

}

// 입력되는 온도에 따라 문구를 띄워주는 온도계 함수를 만들려고 합니다.
// 입력된 값에 따라 알맞은 문구를 띄워주세요
// 18이하면 "조금 춥네요"
// 19 ~ 23 이면 "날씨가 좋네요"
// 24이상이면 "조금 덥습니다"
function temperature(num){
	if(num <= 18) {
        console.log("조금 춥네요")
    } else if(num >= 19 && nun <= 23) {
        console.log("날씨가 좋네요")
    } else if(num >= 24) {
        console.log("조금 덥습니다.")
    }
}

// ====================================================================================================================================
// 또 다른 해결 방법
// 숫자가 높은 순으로 처리를 한다.
function temperature(num){
	if(num >= 24) {
        console.log("조금 덥습니다.")
    } else if(num >= 19 && num <= 23) {
        console.log("날씨가 좋네요")
    } else if(num <= 18) {
        console.log("조금 춥네요")
    }
}

// 입력되는 달(month)에 따라 각 달에 며칠이 있는지 보여주는 함수를 만들려고 합니다.
// 각 조건에 해당하는 알맞은 값을 입력해 주세요

function days(month) {
	if(month === 1 
        || month === 3 
        || month === 5 
        || month === 7 
        || month === 8 
        || month === 10 
        || month === 12) {
        return 31;
    } else if(month === 2) {
        return 28;
    } else if(month === 4 || month === 6 || month === 9 || month === 11) {
        return 30;
    }
}