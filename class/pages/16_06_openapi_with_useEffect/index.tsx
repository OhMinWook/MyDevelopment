import axios from "axios";
import { useEffect, useState } from "react";

export default function OpenapiWithUseEffectPage() {
  // const [dogUrl, setDogUrl] = useState("");

  // useEffect(() => {
  //   async function fetchDog() {
  //     const result: any = await axios.get(
  //       "https://date.nager.at/api/v3/publicholidays/2022/KR"
  //     );
  //     setDogUrl(result.data.message);
  //   }
  //   fetchDog();
  // }, []);
  const testApi = async () => {
    const result = await axios.get("https://api.sampleapis.com/coffee/hot");
    console.log(result);
  };

  return (
    <>
      {/* <div>오픈API 연습</div>
      <img src={dogUrl} /> */}
      <button onClick={testApi}> api test </button>
    </>
  );
}
