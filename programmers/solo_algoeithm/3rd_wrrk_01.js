// 대문자와 소문자가 섞여 있는 문자열 s가 주어집니다. s에 'p'의 개수와 y의 개수를 비교해 같으면 true, 다르면 false를 return 하는 함수를 완성하세요
// p,y 모두 하나도 없는 경우는 항상 true 를 반환합니다. 단 개수를 비교할 때는 대문자와 소문자는 구별하지 않습니다.

function solution(s) {
  let answer = true;
  let p = 0;
  let y = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "p" || s[i] === "P") {
      p++;
    } else if (s[i] === "y" || s[i] === "Y") {
      y++;
    }
  }

  if (y !== p || y === 0) {
    answer = false;
  }

  return answer;
}
