import * as yup from "yup";

export const schema = yup.object().shape({
  // 문자인지 숫자인지 비교, 이메일 형식인지 비교, 필수인지 아닌지 비교
  myEmail: yup
    .string()
    .email("이메일 형식이 적합하지 않습니다.")
    .required("반드시 입력해야 하는 필수사항입니다."),
  myPassword: yup
    .string()
    .min(4, "최소 4자리 이상입니다.")
    .max(15, "최대 15자리 이하입니다.")
    .required("반드시 입력해야 하는 필수사항입니다."),
});
