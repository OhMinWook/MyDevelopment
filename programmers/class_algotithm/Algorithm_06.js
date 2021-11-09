//정수 num이 짝수일 경우 "Even"을 반환하고 홀수인 경우 "Odd"를 반환하는 함수, solution을 완성해주세요.
function solution(num) {
    
    // 삼항 연산자
    return num  === 0 ? 'Even' : 'Odd'
    
//     let answer = '';
    
//     if(num % 2 === 0) {
//         answer ='Even'
//     }
//     else {
//         answer = 'Odd'
//     }
    
//     return answer;
}


// 정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.
function solution(arr) {
    let answer = 0;
    let sum = 0;
    
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i]
        
    }
    // 총합에서 배열의 길이만큼 나눠주면 평균값을 구할 수 있다.
    answer = sum / arr.length;
    
    
    return answer;
}


// 단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.
function solution(s) {
    let answer = '';
    
    // 가운데의 인덱스 값을 담을 변수 설정
    let center = Math.floor(s.length / 2)
    
    answer = s[center];
    
    if(s.length % 2 === 0) {
        // 짝수일 경우 가운데 2글자를 가져온다.
        console.log(s[center -1], s[center])
        answer = s[center - 1] + answer
    }
    
   console.log(answer)
        
    return answer;
}