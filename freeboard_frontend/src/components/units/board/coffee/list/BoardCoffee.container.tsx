import axios from "axios";
import { useEffect, useState } from "react";
import CoffeeUI from "./BoardCoffee.presenter";

export default function CoffeeContainer() {
  // 기본을 빈 배열로 만들어서 시작한다.
  const [coffee, setCoffee] = useState([]);

  useEffect(() => {
    const getCoffee = async () => {
      new Array(21).fill(1).map(async (_) => {
        const result = await axios.get("https://api.sampleapis.com/coffee/hot");
        setCoffee(result.data);
        // setCoffee((prev) => [...prev, result.data.description]);
      });
    };
    getCoffee();
    console.log("커파ㅣ");
  }, []);

  // useEffect(() => {
  //   const getCoffee = () => {
  //     new Array(3).fill(1).map(async (_) => {
  //       const result = await axios.get("https://api.sampleapis.com/coffee/hot");
  //       console.log(result);
  //       setCoffee((prev) => [...prev, result.data]);
  //     });
  //   };
  //   getCoffee();
  // }, []);
  // console.log(coffee);
  return (
    <>
      <CoffeeUI coffee={coffee} />;
    </>
  );
}
