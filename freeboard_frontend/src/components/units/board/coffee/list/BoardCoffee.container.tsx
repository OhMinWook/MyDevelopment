import axios from "axios";
import { useEffect, useState } from "react";
import CoffeeUI from "./BoardCoffee.presenter";

export default function CoffeeContainer() {
  const [coffee, setCoffee] = useState("");

  useEffect(() => {
    const getCoffee = async () => {
      new Array(21).fill(1).map(async (_) => {
        const result = await axios.get("https://api.sampleapis.com/coffee/hot");
        setCoffee((prev) => [...prev, result.data.title]);
        // setCoffee((prev) => [...prev, result.data.description]);
      });
    };
    getCoffee();
    console.log("커파ㅣ");
  }, []);

  // useEffect(() => {
  //   const getCoffee = async () => {
  //     const result = await axios.get("https://api.sampleapis.com/coffee/hot");
  //     console.log(result);
  //   };
  //   getCoffee();
  // }, []);
  console.log(coffee);
  return (
    <>
      <CoffeeUI coffee={coffee} />;
    </>
  );
}
