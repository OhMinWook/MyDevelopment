import styled from "@emotion/styled";
import { ReactChild } from "react";
import { useRouter } from "next/Router";
import Header from "./header/Header.container";
import Banner from "./banner/Banner.container";
import Navigation from "./navigation/Navigation.container";
import Footer from "./footer/Footer.container";

const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
`;

const Sidebar = styled.div`
  width: 300px;
  background-color: blue;
  height: 1360px;
`;
const Body = styled.div``;

const BodyWrapper = styled.div`
  display: flex;
`;

const HiddenHeader = ["detail/6194d8b633bb5c002919e116"];

interface ILayoutProps {
  children: ReactChild;
}

export default function Layout(props: ILayoutProps) {
  const router = useRouter();
  console.log(router.asPath);

  const isHiddenHeader = HiddenHeader.includes(router.asPath);

  return (
    <Wrapper>
      <Header />
      <Navigation />
      <Banner />
      {/* <BodyWrapper> */}
      {/* <Sidebar>사이드바영역입니다.</Sidebar> */}
      <Body>{props.children}</Body>
      {/* </BodyWrapper> */}
      <Footer />
    </Wrapper>
  );
}
