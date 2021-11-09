// 함수 solution은 정수 x와 자연수 n을 입력 받아, x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴해야 합니다.
// 다음 제한 조건을 보고, 조건을 만족하는 함수 solution을 완성하세요 
function solution(x, n) {
    var answer = [];

    for(let i = 1; i <= n; i++) {
        answer.push(i*x)
    }

    return answer;
}

// 문자열 s에 나타나는 문자를 큰 것부터 작은 순으로 정렬해 새로운 문자열을 리턴하는 함수, solution 을 완성하세요
// s는 영문 대소문자로 구성되어 있으며, 대문자는 소문자보다 작은 것으로 간주됩니다.
function solution(s) {
    let answer = '';
    
    for(let i = 0; i < s.length; i++) {
        return s.split("").sort().reverse().join("")
    }

    return answer;
}

// 배열 array의 i번째 숫자부터 j번째 숫자까지 자르고 정렬했을 때 k번째에 있는 수를 구하려 합니다.
// 예를 들어 array가 [1, 5, 2, 6, 3, 7, 4], i = 2, j = 5, k = 3이라면

// array의 2번째부터 5번째까지 자르면 [5, 2, 6, 3]입니다.
// 1에서 나온 배열을 정렬하면 [2, 3, 5, 6]입니다.
// 2에서 나온 배열의 3번째 숫자는 5입니다.

// 배열 array [i,j,k]를 원소로 가진 2차원 배열 commands가 매개변수로 주어질 때 commands의 모든 원소에 대해
// 앞서 설명한 연산을 적용했을 때 나온 결과를 배열에 담아 return 하도록 함수를 작성해주세요
function solution(array, commands) {
    let answer = [];
    
    for(let i = 0; i < commands.length; i++) {
        let arr = array.slice(commands[i][0] -1, commands[i][1])
        arr.sort(function(a, b) {return a-b})
        answer.push(arr[commands[i][2]-1])
        console.log(arr)
    }    
    
    return answer;
}