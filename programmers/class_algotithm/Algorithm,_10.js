// 대문자와 소문자가 섞여있는 문자열 s가 주어집니다. s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return 하는 solution를 완성하세요.
// 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다. 단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.

// 예를 들어 s가 "pPoooyY"면 true를 return하고 "Pyy"라면 false를 return합니다.
function solution(s) {
  s = s.toLowerCase(); // 문자열 전체를 소문자로 변환
  // s.toUpperCase(); 문자열 전체를 대문자로 변환
  let p = 0; // p의 개수를 카운트
  let y = 0; // y의 개수를 카운트

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "y") {
      y++;
    } else if (s[i] === "p") {
      p++;
    }
  }

  return p === y;

  // p와 y의 개수가 동일하다면 true 값을 리턴
  // p와 y의 개수가 동일하지 않다면 false 값을 리턴
}

// 메소드 풀이
function solution(s) {
  const check = {};
  const answer = s
    .toLowerCase()
    .split("")
    .forEach((str) => {
      check[str] === undefined
        ? (check[str] = 1)
        : // 기존에 알파벳이 없다면 1을 초깃값으로 생성
          (check[str] += 1);
      // 기존에 알파벳 개수를 1 증가
    });

  return check.p === check.y;
}

// 문자열 s는 한 개 이상의 단어로 구성되어 있습니다. 각 단어는 하나 이상의 공백문자로 구분되어 있습니다.
// 각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, solution을 완성하세요.
function solution(s) {
  let answer = "";

  let idx = 0; // 단어별로 인덱스 값을 저장하는 역할
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      answer += " ";
      idx = 0; // idx를 0을 초기화
      // 공백을 만날 때마다 인덱스 값을 0으로 초기화 시켜서 공백문자를 인덱스 값에 포함시키지 않는다.
      // 공백이라면 그냥 공백을 넣어준다.(예외 처리)
    } else {
      answer += idx % 2 === 0 ? s[i].toUpperCase() : s[i].toLowerCase();
      idx++;
    }
    console.log(answer, idx);
  }

  return answer;
}

// 메소드 문제 풀이
function solution(s) {
  // 공백을 기준으로 쪼개준다.
  const answer = s
    .split(" ")
    .map((word) => {
      return word
        .split("")
        .map((letter, i) => {
          return i % 2 === 0 ? letter.toUpperCase() : letter.toLowerCase();
        })
        .join("");
      // 하나의 문자열로 붙어서 만들어 준다.
    })
    .join(" ");
  // 공백을 기준으로 띄어서 문자열을 만들어 준다.
  return answer;
}
