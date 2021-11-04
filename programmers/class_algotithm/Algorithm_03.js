// 반복문(loop)
// 일정 로직을 계속 반복해서 실행하는 문법
// for() 로 시작하며, 소괄호() 안에 문법을 작성해 준다.
// 최초식, 조건식, 증감식으로 구성되어있다.
// 최초식은 반복문을 처음 실행할 때 선언
// 어디서부터 시작하는지를 결정하는 시작점
// 조건식은 반복문을 실행하는 조건을 설정
// 해당 조건식이 true일 때만 로직을 실행
// 증감식은 반복문을 실행할 때마다 최초식을 증감, 반복문의 실행범위를 조절할 수 있다.
// 반복문을 사용할 때는 무한 루프를 조심해야 한다.

// 입력 되는 수에 따라 0부터 해당 수까지의 합을 구하려고 한다.
function sum(num) {

    let count = 0;
    for(let i = 1; i <= num; i++) {
        count += i;
    }

}


// 특정 문자열 세기
// 문자열에서 "a"가 몇 번 등장하는지 횟수를 구하는 함수를 만들려고 합니다.
// 반복문을 이용해 "a"의 등장 횟수를 변수 count에 할당하새요
function countLetter(str) {
    let count = 0;
    for(let i = 0; i < str.length; i++) {
        if(str[i] === "A" || str[i] === "a") {
            count += 1;
        }
    }
} 

// 문자열 삽입
// num을 입력 받아 1부터 num의 값까지의 각각의 숫자 사이에 "-"이 들어간 문자열을 만들어야 합니다.
function makeNumber(num) {
    let str = ""

    for(let i = 1; i <= num; i++) {
        
        str += i;

        if(i !== num) {
            str += '-';
        }
    }
}

// 홀수 문자열
// num을 입력 받아 1부터 num까지의 숫자 중 홀수로 구성된 문자열을 만들어야 합니다.
function makeOdd(num) {
    let str = ""
    for(let i = 1; i <= num; i++) {
        if(i & 2 === 1) {
            str += i;
        }
    }

}

// 가장 큰 수 찾기
// str은 무작위 숫자인 문자열입니다. 해당 문자열에서 가장 큰 수를 구하는 함수를 만들어야 합니다.
function bigNum(str) {
    let biggest = 0;


    for(let i = 0; i < str.length; i++) {
        if(biggest < Number(str[i])) {
            biggest = Number(str[i]);
        }
    }
    return String(biggest)
}

