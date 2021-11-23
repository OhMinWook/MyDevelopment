// console.log("Hello World!!");
import { createConnection } from "typeorm";

createConnection({
  type: "mysql",
  database: "mysql",
  username: "root",
  password: "codecamp",
  host: "34.64.207.239",
  port: 3305,
  // @ts-ignore
  entities: [__dirname + "/*.mysql.ts"],
  logging: true,
  synchronize: true,
})
  .then(() => {
    // 연결 성공시 실행하기!!
    console.log("연결 완료");
  })
  .catch((error) => {
    // 연결 실패시 실행하기!!
    console.log(error);
  });
