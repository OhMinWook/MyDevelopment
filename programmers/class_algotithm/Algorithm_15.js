// 두 수를 입력 받아 두 수의 최대공약수와 최소공배수를 반환하는 함수를 완성해 보세요
// 배열의 맨 앞에 최대 공약수, 그 다음 최소공배수를 넣어 반환하면 됩니다.
// 예를 들어 두 수, 3, 12의 최대공약수는 3, 최소공배수는 12이므로 [3, 12]를 반환해야 합니다.
function solution(n, m) {
  let answer = [];
  let min = 0;
  let max = 0;
  let temp = 0;

  if (n < m) {
    temp = n;
    n = m;
    m = temp;
  }

  for (let i = 0; i < m; i++) {
    if (n % i === 0 && m % i === 0) {
      max = i;
    }
  }

  max = (n * m) % min;
  answer = min;
  answer = max;

  return answer;
}

// 다른 풀이
function solution(n, m) {
  const answer = [];

  // 최대공약수
  const gcdArr = [];
  for (let i = 1; i <= m; i++) {
    if (n % i === 0 && m % i === 0) {
      gcdArr.push(i);
    }
  }
  answer[0] = Math.max(...gcdArr);

  // 최소공배수
  for (let i = m; i <= n * m; i += m) {
    if (i % n === 0) {
      answer[1] = i;
      break;
    }
  }
  return answer;
}

// 유클리드 호제법
function solution(n, m) {
  // 유클리드 호제법

  // a를 b로 나눴을 때 ( a가 b보다 클 경우) === 큰 수에서 작은 수를 나눴을 때
  // 나머지 값 결과가 0일 때, 작은 수가 최대공약수가 된다.
  // 0이 되지 않으면 작은 수가 다시 큰 수가 되고, 나머지 값이 작은 수가 된다.
  // 계속 반복했을 때 나머지 값이 0이 나오면, 작은 수가 최대공약수가 된다.

  let a = m; // 큰 수
  let b = n; // 작은 수
  let r = 0; // a를 b로 나눴을 때의 나머지 값이 저장

  while (a % b > 0) {
    r = a % b;
    a = b; // 큰 수에 작은 수를 할당
    b = r; // 작은 수에 나머지 값 할당
  }
  // 두 수를 곱한 값에 최대 공약수를 나무면 최소공배수가 된다.
  return [b, (n * m) / b];
}
