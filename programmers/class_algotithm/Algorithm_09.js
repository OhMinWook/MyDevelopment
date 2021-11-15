// 1번째 문제

// 문자열에 s에 나타나는 문자를 큰 것부터 작은 순으로 정렬해 새로운 문자열을 리턴하는 함후를 완성하세요
// s는 영문 대소문자로만 구성되어 있으며, 대문자는 소문자보다 작은 것으로 간주한다.
// 문자열도 유니코드의 크기로 서로 비교를 할 수 있다.
// 늘 항상 대문자는 소문자보다 작게 나온다.
// sort는 배열 안의 인덱스들을 정렬해 주는 메서드이다. 디폴트 값으로 오름차순으로 정렬해 준다.
// 문자가 두 자리의 수를 정렬할 때는 앞자리 수만 비교하기 때문에 내림차순인지 오름차순인지 알려줘야 한다.
// 숫자일 경우에는 함수를 이용해 +, - 연산을 통해 오름,내림차순으로 정렬할 수 있다.

// 문자열의 비교는 부등호를 통해 내림차순으로 정렬할 수 있다.
["a", "c", "h", "j", "t"].sort((a, b) => {
    return a > b ? -1 : 1
})

["a", "c", "h", "j", "t"].sort((a, b) => {
    return a < b ? -1 : 1
})

// 메서드 마다 비었다는 표시를 하는게 있고 없는 게 있는 구별법

function solution(s) {
    let answer = [];
for(let i = 0; i <s.length; i++) {
    answer.push( s[i] )
    }
    answer.sort((a, b) => {
    // 문자열 내림차순하는 방법
    return a > b ? -1 : 1
    })

    return answer.join("");
}


// 2번째 문제

// 배열 array의 i번째 숫자부터 j번째 숫자까지 자르고 정렬했을 때, k번째에 있는 수를 구하려 합니다.
// 예를 들어 array가 [1, 5, 2, 6, 3, 7, 4], i = 2, j = 5, k = 3이라면
// array의 2번째부터 5번째까지 자르면 [5, 2, 6, 3]입니다.
// 1에서 나온 배열을 정렬하면 [2, 3, 5, 6]입니다.
// 2에서 나온 배열의 3번째 숫자는 5입니다.
// 배열 array, [i, j, k]를 원소로 가진 2차원 배열 commands가 매개변수로 주어질 때, 
// commands의 모든 원소에 대해 앞서 설명한 연산을 적용했을 때 나온 결과를 배열에 담아 return 하도록 solution 함수를 작성해주세요.

let answer = [];
// 어떤 걸 반복문 돌려야 할 지를 모를 때는 리턴 값과 비슷한 크기의 배열을 돌려주면 좋다.
for( let idx = 0; idx < commands.length; idx++) {
    const i = commands[idx][0]
    const j = commands[idx][1]
    const k = commands[idx][2]
    
    const result = array.slice( i-1, j)
                        .sort( (a, b) => {
                            return a - b
                        })
    answer.push(result[k - 1])
}


// 메서드 활용 문제 풀이
function solution(array, commands) {
    const answer = commands.map( el => {
        const result = array.slice(el[0]-1, el[1])
                            // 오름 차순 정렬
                        .sort((a, b) => {
                        return a - b
        })

    return result[ el[2] - 1 ]

    })


    return answer;
}

// 다른 풀이
    for(let i = 0; i < commands.length; i++) {
        let arr = array.slice(commands[i][0]-1, commands[i][1])
        arr.sort(function(a, b) {return a-b}) // sort 메서드를 내림차순하는 방법(숫자) 연산 값이 양수라면 앞으로 보내고 음수라면 뒤로 보낸다.
        answer.push(arr[commands[i][2]-1])
    }