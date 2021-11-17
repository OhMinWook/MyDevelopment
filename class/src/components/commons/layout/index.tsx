import { ReactChild } from "react";
import styled from "@emotion/styled";
import Header from "./header/Header.container";
import Footer from "./footer/Footer.container";
import Navigation from "./navigation/Navigation.container";
import Banner from "./banner/Banner.container";
import { useRouter } from "next/router";

const Wrapper = styled.div``;

const Body = styled.div``;

const BodyWrapper = styled.div`
  display: flex;
`;
const Sidebar = styled.div`
  width: 200px;
  background-color: #828282;
  height: 500px;
`;

const Hidden_Headers = ["/12_05_modal_address_state_prev"];

interface ILayoutProps {
  children: ReactChild;
}
export default function Layout(props: ILayoutProps) {
  const router = useRouter();
  console.log(router);

  const isHiddenHeader = Hidden_Headers.includes(router.asPath);

  return (
    <Wrapper>
      {!isHiddenHeader && <Header />}
      <Banner />
      <Navigation />
      <BodyWrapper>
        <Sidebar>sidebar!!!</Sidebar>
        <Body>{props.children}</Body>
      </BodyWrapper>
      <Footer />
    </Wrapper>
  );
}
