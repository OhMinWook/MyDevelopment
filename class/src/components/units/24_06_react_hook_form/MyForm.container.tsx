import MyFormUI from "./MyForm.presenter";
import { FormValues } from "./MyForm.types";

export default function MyForm() {
  function onClickLogin(data: FormValues) {
    console.log(data);
    // loginUser API 요청하기~!
  }
  return <MyFormUI onClickLogin={onClickLogin} />;
}
