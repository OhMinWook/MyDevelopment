// 정수 num이 짝수일 경우 "Even"을 반환하고, 홀수인 경우 "Odd"을 반환하는 함수, solution을 완성해주세요
// 음수도 포함한 반환값에 유의

function solution(num) {
    var answer = '';
    
     
        if(num % 2 === 0 || num === 0) {
            return "Even"
        }
        else if (num % 2 === 1 || num % 2 === -1) {
            return "Odd"
        }

    return answer;
}


// 정수를 담고 있는 배열 arr의 평균값을 return 하는 함수, solution을 완성해 보세요
// arr은 길이 1 이상, 100이하인 배열입니다.
// arr의 원소는 -10,000 이상, 10,000 이하인 배열입니다.

function solution(arr) {
    var answer = 0;
    
    let sum = 0;

    for(let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }   
    answer = sum / arr.length;
    
    return answer;
}

// 단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요, 단어의 길이가 짝수라면, 가운데 두 글자를 반환하면 됩니다.
// s는 길이가 1이상 10,000 이하인 스트링입니다.

function solution(s) {
    var answer = '';
    
    for(let i = 0; i < s.length; i++ ) {
        if(s.length % 2 === 0) {
            return s.slice((s.length/2)-1, s.length/2+1)
        }
        else if(s.length % 2 === 1) {
            return s.slice((s.length/2), s.length/2+1)
        }
    }

    return answer;
}