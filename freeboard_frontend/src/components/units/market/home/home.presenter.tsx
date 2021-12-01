export default function HomeUI(props) {
  return (
    <>
      <div>로그인에 성공했습니다.</div>
      <div>{props.data?.fetchUserLoggedIn.name}</div>
    </>
  );
}
