// 자연수 n이 매개변수로 주어집니다. n을 3진법 상에서 앞뒤로 뒤집은 후,
// 이를 다시 10진법으로 표현한 수를 return 하도록 solution 함수를 완성해주세요.
function solution(n) {
  // 10진법 데이터를 3진법으로 반환
  n = n.toString(3);

  let reverse = "";
  for (let i = n.length - 1; i >= 0; i--) {
    reverse += n[i];
  }
  // 3진법을 10진법으로 변환
  return parseInt(reverse, 3);
}

// 메서드 풀이
function solution(n) {
  n = n.toString(3).split("").reverse().join("");

  console.log(n);
  return parseInt(n, 3);
}

// 두 수의 최소공배수(Least Common Multiple)란 입력된 두 수의 배수 중 공통이 되는 가장 작은 숫자를 의미합니다.
// 예를 들어 2와 7의 최소공배수는 14가 됩니다.
// 정의를 확장해서, n개의 수의 최소공배수는 n 개의 수들의 배수 중 공통이 되는 가장 작은 숫자가 됩니다.
// n개의 숫자를 담은 배열 arr이 입력되었을 때 이 수들의 최소공배수를 반환하는 함수, solution을 완성해 주세요.
function solution(arr) {
  // 배열 중 가장 큰 수를 구하기 위해 스프레드 연산자 사용
  const biggest = Math.max(...arr);

  let sum = biggest;
  while (true) {
    let check = true;
    for (let i = 0; i < arr.length; i++) {
      if (sum % arr[i] !== 0) {
        check = false;
        break;
      }
    }
    if (check) {
      return sum;
    }
    sum += biggest;
  }
}
