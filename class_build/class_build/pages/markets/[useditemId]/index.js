import Head from "next/head";
import { gql, request } from "graphql-request";

export default function BoardPage(props) {
  return (
    <>
      <Head>
        <meta property="og:title" content={props.fetchUseditem.name} />
        <meta
          property="og:image"
          content={`https://storage.googleapis.com/${props.fetchUseditem.images}`}
        />
        <meta property="og:description" content={props.fetchUseditem.remarks} />
      </Head>
      <div>안녕하세요! 상품 페이지입니다.</div>
    </>
  );
}

const FETCH_USED_ITEM = gql`
  query fetchUesditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      name
      remarks
      images
    }
  }
`;

export const getServerSideProps = async (context) => {
  const result = await request(
    "https://backend04.codebootcamp.co.kr/graphql",
    FETCH_USED_ITEM,
    { useditemId: context.query.useditemId }
  );

  return {
    props: {
      fetchUseditem: {
        name: result.fetchUseditem.name,
        remarks: result.fetchUseditem.remarks,
        images: result.fetchUseditem.images[0],
      },
    },
  };
};
