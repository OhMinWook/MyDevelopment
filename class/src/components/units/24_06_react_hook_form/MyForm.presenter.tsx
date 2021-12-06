import Button01 from "../../commons/buttons/01/Button01";
import Input01 from "../../commons/inputs/input01";
import { schema } from "./MyForm.Validation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";

export default function MyFormUI(props) {
  const { handleSubmit, register, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(props.onClickLogin)}>
      {/* 이메일: <input type="text" {...props.register("myEmail")} /> */}
      이메일: <Input01 type="text" register={register("myEmail")} />
      <div>{props.formState.errors.myEmail?.message}</div>
      {/* 비밀번호: <input type="password" {...props.register("myPassword")} /> */}
      비밀번호: <Input01 type="password" register={register("myPassword")} />
      <div>{props.formState.errors.myPassword?.message}</div>
      <Button01 name="로그인하기" isValid={formState.isValid} type="submit" />
      {/* <button isValid={props.formState.isValid}>로그인하기</button> */}
      {/* form 태그 안에 있을 때 이렇게 해 주어야 한다. */}
      {/* <button type="button" onClick={onClickMove}>목록으로 이동하기</button> */}
      {/* <MyButton type="reset">초기화하기</MyButton> */}
    </form>
  );
}
