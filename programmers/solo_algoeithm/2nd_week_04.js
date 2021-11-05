// 자연수 n이 주어지면 n의 각 자릿수의 합을 구해서 return 하는 함수를 완성하세요
// 예를 들어 n = 123이면  1 + 2 + 3 = 6 을 return 하면 됩니다.

function solution(n)
{
    var answer = 0;

    let string = [];
    do {

        string.push(n % 10)
        n = Math.floor(n / 10)
        
    }while(n > 0);
    
    for(let i = 0; i < string.length; i++) {
        answer += string[i];
    }

    console.log('Hello Javascript')

    return answer;
}

// 함수 solution 은 정수 x와 자연수 n을 입력 받아, x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴해야 합니다.
// 다음 제한 조건을 보고, 조건을 만족하는 함수, solution을 완성해 주세요
function solution(x, n) {

    var answer = [];

    

    return answer;
}