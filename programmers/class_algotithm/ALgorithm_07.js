// String형 배열 seoul의 element중 "Kim"의 위치 x를 찾아, 
// "김서방은 x에 있다"는 String을 반환하는 함수, solution을 완성하세요. 
// seoul에 "Kim"은 오직 한 번만 나타나며 잘못된 값이 입력되는 경우는 없습니다.
function solution(seoul) {
    //     let x = 0; // 김서방의 위치(인덱스) 값을 저장
          
    //     for(let i = 0; i < seoul.length; i++) {
    //         if(seoul[i] === "Kim") {
    //             x = i
    //         }
    //     }
        
        // 해당하는 인덱스 값이 있으면 값을 내고 없으면 -1을 나타낸다.
        const x = seoul.indexOf( "Kim" );
        
        
        return `김서방은 ${x}에 있다`
        
    }


// 문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요. 
// 예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.

function solution(s) {
    // 예외 처리부터 제일 먼저 해준다.
    if(s.length !== 4 && s.length !== 6) {
        return false
    }
    
    let answer = true;
    for(let i = 0; i < s.length; i++) {
        // 해당 데이터가 숫자인지 문자인지를 판별해주는 메서드(Not a Number)
        // 문자이면 true 값을 반환하고 숫자이면 false값을 반환한다.
        // 여러 개중에 하나라고 문자가 있으면 true 값을 반환한다.
        if(isNaN(s[i]) === true) {
            // Number 타입으로 문자열인 경우 true 값을 반환
            // : 숫자가 아니다.
            answer = false;
            break;
        }
    }
    
    return answer
}

// filter를 활용한 풀이
function solution(s) {
    // 예외 처리부터 제일 먼저 해준다.
    if(s.length !== 4 && s.length !== 6) {
        return false
    }
    
    // 문자열을 배열로 하나하나마다 쪼개주는 메서드 split("")
    const answer = s.split("")
                     .filter( num => {
                         // 데이터가 숫자가 아닌 문자타입만 남긴다.
                         // NaN 값인 데이터만 남긴다.
                        return isNaN(num)                  
                     })
    return answer.length === 0
}

// 정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.  

function solution(n) {
    let answer = 0;
    
    for(let i = 1; i <= n; i++) {
        if(n % i === 0) {
            // n을 i로 나누었을 때 나머지값이 0이라면 약수로 판단
            answer += i
        }
    }
        
    return answer 
}

// 메서드를 이용한 풀이
function solution(n) {
    let answer = 0;
    
    new Array(n)
            .fill(1)
            .forEach((num, i) => {
    if(n % (num + i) === 0) {
            answer += (num+i)
            }
        })
    console.log(answer)

    return answer
}