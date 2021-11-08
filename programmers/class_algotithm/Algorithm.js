// 문자열 s를 숫자로 변환한 결과를 반환하는 함수 solution을 완성하세요
// s의 길이는 1이상 5이하입니다.
// s의 맨 앞에는 부호가(-, +) 올 수 있습니다.
// s는 부호의 숫자로만 이루어져있습니다.
// s는 "0"으로 시작하지 않습니다.
function solution(s) {
    var answer = 0;
    
    if(Number(s) > 0) {
        answer = Number(s)
    } else if (Number(s) < 0) {
        answer = Number(s)
    }
    
    return answer;
}

// 다른 풀이 방법
function solution(s) {
    // console.log(typeof s)
    
    // s = Number(s)
    // console.log(typeof s)
    
    
    // return s / 1
    // return Number(s)
    
    return +s
    
}


// 배열 arr가 주어집니다. 배열 arr의 각 원소는 숫자 0부터 9까지 이루어저 있습니다.
// 이 때 배열 arr에서 연속적으로 나타나는 숫자는 하나만 남기고 전부 제거하려고 합니다.
// 단 제거된 후 남은 수들을 반환할 때는 배열 arr의 원소들의 순서를 유지해야 합니다.
// arr = [1, 1, 3, 3, 0, 1, 1] 이면 [1, 3, 0, 1] 을 return 합니다.
// arr = [4, 4, 4, 3, 3] 이면 [4, 3] 을 return 합니다.
// 배열 arr에서 연속적으로 나타나는 숫자들을 제거하고 남은 수들을 return 하는 함수를 완성하세요
function solution(arr)
{
    var answer = [];

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === arr[i+1]) {

        } 
        else {
            answer.push(arr[i])
        }
    }
    
    return answer;
}


// 다른 풀이 방법
function solution(arr)
{
    // 배열을 생성할 때 웬만하면 const를 통해서 만들어주는게 좋다.
    const answer = [];

    for(let i = 0; i < arr.length; i++) {
        // 입력된 함수에서 비교할지
        // if(arr[i] !== arr[i+1]) {
        // 넣어질 함수에서 같고 다름을 비교해 넣을지
        if(answer[answer.length-1] !== arr[i]) {
            answer.push(arr[i])
           }
        // }
    }
    
    return answer;
}


// 프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 고객들의 전화번호의 일부를 가립니다.
// 전화번호가 문자열 phone_number로 주어졌을 때, 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *로 가린
// 문자열을 리턴하는 함수를 완성하세요
function solution (phone_number) {
    let answer = "";

    for(let i = 0; i < phone_number.length; i++) {
        if(i >= phone_number[i].length-4) {
            return answer += phone_numberp[i]
        } else {
            return answer += "*"
        }

    }

    return answer
}


// 다른 풀이 방법
function solution (phone_number) {
    let answer = ""
    answer = answer.padStart(phone_number.length-4, "*")
    answer += phone_number.slice(phone_number.length-4, phone_number.length)
    console.log(phone_number)
    
    return answer
    
    // let answer = '';
    
   
//     for(let i =0; i < phone_number.length; i++) {
        
//         if(i < phone_number.length - 4) {
//             answer += "*"
//         }
//         else {
//             answer += phone_number[i];
//         }
//     }
    // return answer
}