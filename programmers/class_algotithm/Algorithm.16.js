// 수많은 마라톤 선수들이 마라톤에 참여하였습니다. 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.
// 마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때,
// 완주하지 못한 선수의 이름을 return 하도록 함수를 완성하세요
function solution(participant, completion) {
  participant.sort(); // 참가자 명단을 오름차순으로 정렬
  completion.sort(); // 완주자 명단을 오름차순으로 정렬

  let answer = "";
  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      answer = participant[i];
      // 참가자 명단과 완주자 명단과 비교했을때
      // 완주자 명단에 없는 참가자를 찾은 후, 바로 반복문을 종료
      break;
    }
  }

  return answer;
}

// 다른 문제 풀이
// 함수 안에서 반복문을 사용할 때 return을 해줘도 break와 같은 기능을 수행한다
function solution(participant, completion) {
  participant.sort(); // 참가자 명단을 오름차순으로 정렬
  completion.sort(); // 완주자 명단을 오름차순으로 정렬

  // let answer = '';
  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      return participant[i];
      // 참가자 명단과 완주자 명단과 비교했을때
      // 완주자 명단에 없는 참가자를 찾은 후, 바로 반복문을 종료
      // break;
    }
  }
  // return answer;
}

// 메서드 방식 문제 풀이
function solution(participant, completion) {
  participant.sort(); // 참가자 명단을 오름차순으로 변경
  completion.sort(); // 완주자 명단을 오름차순으로 변경

  const answer = participant.filter((name, i) => {
    return name !== completion[i];
  });
  return answer[0];
}
