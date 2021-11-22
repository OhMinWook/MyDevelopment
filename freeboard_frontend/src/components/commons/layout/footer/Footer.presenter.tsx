import { Footer, Icons, Menu, Terms, End } from "./Footer.styles";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedCameraIcon from "@mui/icons-material/LinkedCamera";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function FooterUI() {
  return (
    <>
      <Footer>
        <Icons>
          <FacebookIcon sx={{ fontSize: 50 }} />
          <LinkedCameraIcon sx={{ fontSize: 50 }} />
          <TwitterIcon sx={{ fontSize: 50 }} />
        </Icons>
        <Menu>
          <span>Info</span>
          <span>Support</span>
          <span>Marketing</span>
        </Menu>
        <Terms>
          <span>Terms of Use</span>
          <span>Privacy Policy</span>
        </Terms>
        <End>
          <span>©2021 Clarity Money</span>
        </End>
      </Footer>
    </>
  );
}
