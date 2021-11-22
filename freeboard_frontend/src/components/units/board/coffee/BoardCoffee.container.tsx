import axios from "axios";
import { useEffect, useState } from "react";
import CoffeeUI from "./BoardCoffee.presenter";

export default function CoffeeContainer() {
  const [coffee, setCoffee] = useState("");

  useEffect(() => {
    async function fetchCoffee() {
      const result = await axios.get("https://api.sampleapis.com/coffee/hot");
      setCoffee(result.data.title);
      setCoffee(result.data.description);
    }
    fetchCoffee();
  }, []);

  return <CoffeeUI result={result} coffee={coffee} fetchCoffee={fetchCoffee} />;
}
