// 수학 객체
// random 객체를 이용하여 1 ~ 100 까지의 무작우 숫자가 나오도록하여, number과 비교해야 한다.
// number보다 큰 수면 Win, 작은 수면 Lose라는 문구를 띄워주세요
function random() {
    let number = 50

    const compare = Math.floor(Math.random * 100)

    if(compare > number) {
        return "Win"
    }
    else {
        return "Lose"
    }
}

// 숫자열인 입력 데이터 2개를 받아 나누기 기능을 하는 함수를 만들어야 합니다.
function divide(num1, num2) {
    return num1 / num2
}

const divide = function divide(num1, num2) {
    return num1 / num2
}

const divide = (num1, num2) => {
    return num1 / num2
}

// 비밀 번호 검증 함수
// 비밀번호 2개를 입력받아 대소문자 구분없이 비교하는 기능을 하는 함수를 화살표 함수를 이용해 만들어야 합니다.
// 추가 조건1 : 만약 비밀번호가 8~16자리가 아니라면 "비밀번호는 8-16자리여야 합니다." 라는 문구를 띄워야 합니다.
// 추가 조건2 : 만약 두 개의 비밀번호 값이 서로 다르면 "비밀번호를 다시 확인해 주세요"러눈 문구를 띄워야 합니다.
const password = (num1, num2) => {

    let pw1 = num1.toLowerCase();
    let p22 = num2.toLowerCase();

    if(!(pw1.length >= 8 && pw1.length <=16) && !(pw2.length >= 8 && pw2.length <=16)) {
        console.log("비밀번호는 8~16자리여야합니다.")
    }
    else if(pw1 !== pw2) {
        console.log("비밀번호를 다시 확인해주세요")
    } else {
        console.log("회원가입을 축하합니다.")
    }

}

// 조건문 실전 적용 - 점수에 따른 등급
// 입력되는 score에 따라 알맞은 등급을 적어야 합니다.
// 100 ~ 90 -> A
// 89 ~ 80 -> A
// 79 ~ 70 -> A
// 69 ~ 60 -> A
// 59점 이하는 F
// 100점 초과나 0점 미만은 "잘못된 점수입니다." 라는 문구를 띄워주세요
function grade(score) {

    if(score >= 90) {
        return "A"
    }
    else if(score <= 80) {
        return "B"
    }
    else if(score <=70) {
        return "C"
    }
    else if(score <= 60) {
        return "D"
    }
    else if(score <=59) {
        return "F"
    } else {
        return "잘못된 점수입니다."
    }

}

// 마이페이지
// 내가 구매한 목록 중 "의류"를 구매한 횟수와 총 금액을 나타내고
// "의류"를 구매한 횟수에 따라 등급을 나타내시오
// 등급표 "0~2" Bronze
// 등급표 "3~4" Sliver
// 등급표 "5이상" Gold
const myShopping = [
    { category: "과일", price: 12000　},
    { category: "의류", price:10000　 },
    { category: "의류", price: 20000　},
    { category: "장난감", price: 9000 },
    { category: "과일", price: 5000　 },
    { category: "의류", price: 10000  },
    { category: "과일", price: 8000　　},
    { category: "의류", price: 7000　　},
    { category: "장난감", price: 5000  },
    { category: "의류", price: 10000　 },
]

let count = 0;
let sum = 0;

for(let i = 0; i <= myShopping.length; i++){
    if(myShopping[i].category = "의류") {
        count += 1;
        sum += myShopping[i].price;
        if(count >= 0 && count <= 2) {
            return "Bronze"
        }
        else if(count >=3 && count <=4) {
            return "Sliver"
        }
        else if(count >= 5) {
            return "Gold"
        }
    }
}

// 문자열 s를 숫자로 변환한 결과를 반환하는 함수, solution을 완성하세요
// s의 길이는 1 이상 5이하입니다.
// s의 맨앞에는 부호(+,-)가 올 수 있습니다.
// s는 부호와 숫자로만 이루어져 있습니다.
// s는 "0"으로 시작하지 않습니다.

function solution(s) {
    let answer = 0;

    if(Number(s) > 0) {
        answer = Number(s)
    }else if(Number(s) < 0){
        answer = Number(s)
    }

    return answer;
}

// 배열 arr가 주어집니다. 배열 arr의 각 원소는 숫자 0부터 9까지로 이루어져 있습니다.
// 이 때 배열 arr에서 연속적으로 나타나는 숫자는 하나만 남기고 전부 제거하려고 합니다.
// 단, 제거된 후 남은 수들을 반환할 때는 배열 arr 원소들의 순서를 유지해야 합니다.
// 예를 들면  
// arr = [1, 1, 3, 3, 0, 1, 1] 이면 [1, 3, 0, 1] 을 return 합니다.
// arr = [4, 4, 4, 3, 3] 이면 [4, 3] 을 return 합니다.
// 배열 arr에서 연속적으로 나타나는 숫자는 제거하고 남은 수들을 return 하는 solution 함수를 완성해 주세요
function solution(arr){
    let answer = [];

    for(let i =0; i < arr.length; i++) {
        if(arr[i] === arr[i+1]) {
           // 같은 숫자일 때는 아무 것도 하지 않는다.
        }
        else {
            answer.push(arr[i]);
        }
    }

    console.log("Hello Javascript")

    return answer
}

// 프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 고객들의 전화번호의 일부를 가립니다.
// 전화번호가 문자열 phone_number로 주어졌을 때, 전화 번호의 뒷 4자리를 제외한 나머지 숫자를 전부 * 으로
// 가린 문자열을 리턴하는 함수, solution을 완성해 주세요
// s는 길이 4이상, 20이하인 문자열입니다.
function solution (phone_number) {
    let answer = "";

    for(let i = 0; i < phone_number.length; i++) {
        // 뒤에서 4자리 수가 아닐 경우 *로 바꿔주는 코드 작성
        if(phone_number[i].slice(-4, phone_number.length)) {

        } else {
            answer.push("*");
        }
    }

    return answer
}
