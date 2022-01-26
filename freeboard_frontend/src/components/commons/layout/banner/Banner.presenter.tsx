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
          <Img
            src="https://i.pinimg.com/564x/b3/5d/1c/b35d1ca92f1a17a9bcbb67b137f10783.jpg"
            alt="이미지 왜 안나와"
          />
        </ImgWrapper>
        <ImgWrapper>
          <Img
            src="https://i.pinimg.com/564x/35/05/25/3505250614c43dc133ab5916d0477e48.jpg"
            alt=" 이미지를 불러올 수 없습니다. "
          />
        </ImgWrapper>
        <ImgWrapper>
          <Img
            src="https://i.pinimg.com/564x/2f/94/50/2f94509a81134ea06d6a3b0eda3c33b7.jpg"
            alt=" 이미지를 불러올 수 없습니다. "
          />
        </ImgWrapper>
        <ImgWrapper>
          <Img
            src="https://i.pinimg.com/564x/a8/1a/98/a81a98752ac36a2b117316d0040ae369.jpg"
            alt=" 이미지를 불러올 수 없습니다. "
          />
        </ImgWrapper>
      </Slider>
    </Banner>
  );
}
