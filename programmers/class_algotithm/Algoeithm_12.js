// 정수 배열 numbers가 주어집니다. numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아
// 더해서 만들 수 있는 모든 수를 배열에 오름차순으로 담아 return하도록 함수를 완성해주세요
function solution(numbers) {
  const answer = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      const sum = numbers[i] + numbers[j];

      if (answer.includes(sum) === false) answer.push(sum);
    }
  }
  // 십의 자리 부터는 앞에 숫자만 비교해서 오름차순을 하므로 디폴트 값으로 오름차순을 하면 안된다.
  answer.sort((a, b) => a - b);
  return answer;
}

// 다른 문제 풀이
// new set
function solution(numbers) {
  const answer = new Set([]);

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      const sum = numbers[i] + numbers[j];

      answer.add(sum);
    }
  }
  answer = Array.from(answer);
  return answer.sort((a, b) => a - b);
}

// 메서드 문제 풀이
function solution(numbers) {
  const answer = [];

  numbers.forEach((num1, i) => {
    numbers.slice(i + 1, numbers.length).forEach((num2) => {
      const sum = num1 + num2;

      if (answer.includes(sum) === false) {
        answer.push(sum);
      }
    });
  });

  return answer.sort((a, b) => a - b);
}
