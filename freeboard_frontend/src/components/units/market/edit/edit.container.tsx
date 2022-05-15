import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import {
  IMutation,
  IMutationResetUserPasswordArgs,
  IMutationUpdateUserArgs,
  IQuery,
} from "../../../../commons/types/generated/types";
import EditUI from "./edit.presenter";
import {
  FETCH_USER_LOGGED_IN,
  RESET_USER_PASSWORD,
  UPDATE_USER,
} from "./edit.queries";

export default function EditContainer() {
  const router = useRouter();
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [checkpassword, setCheckpassword] = useState<string>("");
  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);
  const [updateUSer] = useMutation<
    Pick<IMutation, "updateUser">,
    IMutationUpdateUserArgs
  >(UPDATE_USER);

  const [resetUserPassword] = useMutation<
    Pick<IMutation, "resetUserPassword">,
    IMutationResetUserPasswordArgs
  >(RESET_USER_PASSWORD);

  const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event?.target.value);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event?.target.value);
  };

  const onChangeCheck = (event: ChangeEvent<HTMLInputElement>) => {
    setCheckpassword(event?.target.value);
  };

  const onClickEdit = async () => {
    if (name) {
      try {
        const result = await updateUSer({
          variables: {
            updateUserInput: {
              name,
            },
          },
        });
      } catch (error) {
        if (error instanceof Error) error.message;
      }
    } else {
      alert("닉네임을 알맞은지 입력해 주세요");
    }

    if (password && checkpassword && password === checkpassword) {
      try {
        const Edit = await resetUserPassword({
          variables: {
            password,
          },
        });
      } catch (error) {
        if (error instanceof Error) error.message;
      }
    } else if (password !== checkpassword) {
      alert("알맞은 비밀번호를 입력하세요");
    } else if (!password && !checkpassword) {
      alert("비번이 적합한지 확인해주세요");
    }
    alert("정보가 입력되었습니다.");
    router.push("./mypage");
  };

  return (
    <EditUI
      data={data}
      onChangeName={onChangeName}
      onChangePassword={onChangePassword}
      onChangeCheck={onChangeCheck}
      onClickEdit={onClickEdit}
    />
  );
}
