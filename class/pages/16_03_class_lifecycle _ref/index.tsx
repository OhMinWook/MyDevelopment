import { Component, createRef } from "react";
import MyComponent from "../../src/components/units/classcomponent";
import Router from "next/router";

interface IState {
  count: number;
}

export default class MyLifeCyclePage extends Component {
  inputRef = createRef<HTMLInputElement>();

  // 객체에 다 넣어준다.
  state = {
    count: 0,
  };

  componentDidMount() {
    console.log("마운트됨");
    this.inputRef.current?.focus();
  }

  componentDidUpdate() {
    // 카운트 올리기 버튼 누르면 수정됨이라고 콘솔에 찍힘
    console.log("수정됨");
  }

  componentWillUnmount() {
    // 다른 페이지로 이동하거나 종료될 시에 콘솔창에 찍힘
    console.log("잘가요~");
  }

  // 함수내의 함수 (메서드)
  onClickCounter = () => {
    console.log(this.state.count);
    this.setState((prev: IState) => ({
      count: prev.count + 1,
    }));
  };

  onClickMove = () => {
    Router.push("/");
  };

  render() {
    return (
      <>
        <input type="text" ref={this.inputRef} />
        {/* 함수 내의 메서드나 다른 객체에 접근하기 위해 this를 사용해 준다. */}
        <div>현재 카운트: {this.state.count}</div>
        {/*  window의 this와 구분해주기 위해서 bind(this)를 해준다. */}
        <button onClick={this.onClickCounter}>카운트 올리기!!!</button>
        <button onClick={this.onClickMove}>페이지 이동하기</button>
        <MyComponent count={this.state.count} />
      </>
    );
  }
}
