// 1973 Collatz 란 사람에 의해 제기된 이 추축은, 주어진 수가 1이 될 때까지 다음 작업을 반복하면, 모든 수를 1로 만들구 있다는 추측입니다.
// 1-1 입력된 수가 짝수라면 2로 나눕니다.
// 1-2 입력된 수가 홀수라면 3을 곱하고 1을 더합니다.
// 2 결과로 나온 수에 같은 작업을 1이 될 때까지 반복합니다.
function solution(num) {
  let count = 0;

  for (let i = 0; i < 500; i++) {
    if (num === 1) {
      break;
      // for 문을 중단
    }
    count++;
    // 삼항 연산자 활용
    // num = num % 2 === 0 ? num / 2 : (num * 3) + 1
    if (num % 2 === 0) {
      // 짝수일 경우
      num = num / 2;
    } else if (num % 2 === 1) {
      num = num * 3 + 1;
    }
  }
  console.log(count, num);

  return num !== 1 ? -1 : count;
}

// 다른 문제 풀이
function solution(num) {
  let count = 0;

  while (num !== 1) {
    if (count >= 500) {
      return -1;
    }

    count++;

    num = num % 2 === 0 ? num / 2 : num * 3 + 1;
    console.log(count, num);
  }

  return count;
}

// 메서드 문제
function solution(num) {
  let count = 0;

  const arr = new Array(500)
    // 배열 안에 수가 이미 들어있어도
    // fill 함수를 사용하면 그 수가 덮어져 채워지게 된다.
    .fill(1)
    // 데이터를 활용하지는 않겠지만
    // 인자 값으로는 사용하려고 언더바 형식으로 둔다.
    .forEach((_) => {
      // 조건문에 해당하는 순간 num과 count는 고정되게 된다.

      if (num !== 1) {
        count++;

        num = num % 2 === 0 ? num / 2 : num * 3 + 1;
      }
    });
  return num === 1 ? count : -1;
}
