// 컴포넌트 생명주기

// 클래스란?
// 물건 만드는 설명서라고 볼 수 있다.
// 객체 (객체지향프로그래밍 - OOP)

// 컴포넌트 생명주기
// 아래로 순서로 이루어진다.
// 그리기 => render
// 그리고 난 뒤 => componentDidMount
// 그리고 난 뒤 변경되었을때 =>componentDidUpdate
// 그리고 난 뒤 사라질 때 => componentWillUnmount

// 언제 사용할까?
// 포커스(깜빡깜빡) - render => 인풋창을 그리고 난 뒤 => 포커스 깜빡깜빡 명령을 준다.

// 컴포넌트가 채팅방일때 componentWillUnmount로 나간 사람에 대해 api로 추적하기 위해서 사용한다.
// 총 인원수 변경이나, 나간 시간 기록등을 변경한다.
