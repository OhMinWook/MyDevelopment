// 길이가 같은 두 1차원의 정수 배열 a, b가 매개 변수로 주어집니다. a와 b의 내적을 return 하도록 함수를 완성해주세요
// 이때, a와 b의 내적은 a[0]*b[0] + a[1]*b[1] + ... + a[n-1]*b[n-1] 입니다. (n은 a, b의 길이)
function solution(a, b) {
  // return a.reduce((s, v, i) => s + v * b[i], 0)
  let answer = 0;

  for (let i = 0; i < a.length; i++) {
    answer += a[i] * b[i];
  }
  return answer;
}

// 메서드 풀이
function solution(a, b) {
  const answer = a
    .map((num, i) => {
      return num * b[i];
    })
    .reduce((el, cu) => {
      return el + cu;
    }, 0);
  return answer;
}

// 더 줄인 케이스(only reduce)
function solution(a, b) {
  const answer = a.reduce((el, cu, i) => {
    console.log(el, cu, i);
    return el + cu * b[i];
  }, 0);
  return answer;
}

// 정수를 저장한 배열 arr에서 가장 작은 수를 제거한 배열을 리턴하는 함수를 완성해 주세요
// 리턴하려는 배열이 빈 배열인 경우에 배열에 -1을 채워 리턴하세요. 예를 들어 arr이 [4,3,2,1]인 경우는
// [4,3,2]를 리턴하고 [10]면 [-1]을 리턴합니다.
function solution(arr) {
  const answer = [];

  // 배열 안에서 제일 작은 값을 저장
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== min) {
      answer.push(arr[i]);
    }
  }

  return answer.length === 0 ? [-1] : answer;
}

// 다른 풀이
function solution(arr) {
  const answer = [];

  const min = Math.min(...arr);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== min) {
      answer.push(arr[i]);
    }
  }
  return answer.length === 0 ? [-1] : answer;
}

// 메서드 풀이
function solution(arr) {
  const min = Math.min(...arr);
  const answer = arr.filter((num) => {
    return num !== min;
  });
  return answer.length === 0 ? [-1] : answer;
}
