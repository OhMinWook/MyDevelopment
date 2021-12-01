import { useQuery } from "@apollo/client";
import HomeUI from "./home.presenter";
import { FETCH_USER_LOGGED_IN } from "./home.queries";

export default function Home() {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);

  return <HomeUI data={data} />;
}
