// 임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지 핀딘히려 합니다.
// n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요
function solution(n) {
  let answer = 0;
  let result = 0;

  result = Math.sqrt(n);
  result = Math.floor(result);

  if (n / result === result) {
    return (answer = (result + 1) * (result + 1));
  } else {
    return -1;
  }
}

// 다른 풀이(반복문을 활용한 케이스)
function solution(n) {
  let answer = -1;

  for (let i = 1; i * i <= n; i++) {
    if (i * i === n) {
      // 제곱근을 찾은 경우( 제곱의 값이 n과 동일한 경우)
      answer = i + 1;
      return answer * answer;
    }
  }
  // 제곱근을 찾지 못한 경우 (-1을 리턴)
  return answer;
}

// 다른 풀이(while문 작성)
function solution(n) {
  let num = 1;

  while (num * num < n) {
    num++;
  }
  // 마직막으로 나오는 값은 11이 된다.
  return num * num === n ? (num + 1) * (num + 1) : -1;
}

// 다른 풀이
