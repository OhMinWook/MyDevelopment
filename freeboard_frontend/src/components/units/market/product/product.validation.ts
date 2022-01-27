import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup.string().required("상품명을 입력하세요"),
  remarks: yup.string().required("remark를 입력하세요"),
  contents: yup.string().required("내용을 입력하세요"),
  price: yup.number().positive().integer().required("가격을 입력하세요"),
});
