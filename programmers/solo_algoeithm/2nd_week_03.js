// String형 배열 seoul의 elements 중 "Kim"의 위치, x를 찾아
// "김서방은 x에 있다."는 String을 반환하는 함수를 완성하세요
// seoul에 "Kim" 오직 한번만 나타나며 잘못된 값이 입력되는 경우는 없습니다.
function solution(seoul) {
    var answer = '';

    for(let i = 0; i < seoul.length; i++){
        if(seoul[i] === "Kim"){
            return "김서방은" + seoul[i] +"에 있다."
        }
    }


    return answer;
}

// 문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해 주는 함수를 완성하세요
// 예를 들어 s가 "a234"이면 False를 리턴하고, "1234" 라면 True를 리턴하면 됩니다.
function solution(s) {
    var answer = true;

    if(s.length === 4 || s.length === 6) {
        // 인자 값에 아무것도 전달하지 않으면 문자열 전체를 length 1인 배열에 담아서 리턴합니다.
        // 임시 변수에 저장
        // 물어보기
        const temp = s.split("")
        for(let i = 0; i < s.length; i++) {
            if(isNaN(s[i]) === true) {
                return false
            }
            else {
                return true
            }
        }
    }
    else {
        return false
    }

    return answer;
}

// 정수 n을 입력 받아 n의 약수를 모두 더한 값을 리턴하는 함수를 완성하세요
// n은 0이상 3000 이하인 정수입니다.

function solution(n) {
    var answer = 0;
    let division = [];
    for(let i = 1; i <+ n; i++){
        if(n % i === 0){
            division.push(i);
        }
    }

    for(let i = 0; i < division.length; i++) {
        answer += division[i];
    }


    return answer;
}
