import { Component } from "react";
import MyComponent from "../../src/components/units/classcomponent";

interface IState {
  count: number;
}

export default class MyCounterPage extends Component {
  // 객체에 다 넣어준다.
  state = {
    count: 0,
  };

  // 함수내의 함수 (메서드)
  onClickCounter = () => {
    // 화살표 함수를 사용하면 raxical this로 되어 언어적인 this로 우리가 생각한 this로 지정된다.
    // 그러면 bind를 하지 않아도 된다.
    console.log(this.state.count);
    this.setState((prev: IState) => ({
      count: prev.count + 1,
    }));
  };

  render() {
    return (
      <>
        {/* 함수 내의 메서드나 다른 객체에 접근하기 위해 this를 사용해 준다. */}
        <div>현재 카운트: {this.state.count}</div>
        {/*  window의 this와 구분해주기 위해서 bind(this)를 해준다. */}
        <button onClick={this.onClickCounter}>카운트 올리기!!!</button>
        <MyComponent count={this.state.count} />
      </>
    );
  }
}
