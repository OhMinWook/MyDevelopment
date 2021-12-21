import Head from "next/head";

export default function BoardPage() {
  return (
    <>
      <Head>
        <meta property="og:title" content="나만의 사이트 게시판!!!" />
        <meta property="og:url" content="http://minugi.shop" />
        {/* <meta property="og:image" content="" /> */}
        <meta
          property="og:description"
          content="안녕하세요! 환영합니다! 나의 사이트에 오신 것을 환영합니다."
        />
      </Head>
      <div>안녕하세요! 게시판입니다.</div>
    </>
  );
}
