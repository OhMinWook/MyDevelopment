import { Banner, ImgWrapper, Img } from "./Banner.styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function BannerUI() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    center: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  return (
    <Banner>
      <Slider {...settings}>
        <ImgWrapper>
          <Img />
        </ImgWrapper>
        <ImgWrapper>
          <Img />
        </ImgWrapper>
        <ImgWrapper>
          <Img />
        </ImgWrapper>
        <ImgWrapper>
          <Img />
        </ImgWrapper>
      </Slider>
    </Banner>
  );
}
