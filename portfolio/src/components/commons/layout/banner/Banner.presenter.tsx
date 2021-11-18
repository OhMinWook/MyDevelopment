import { Banner } from "./Banner.styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function BannerUI() {
  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
  };
  return (
    <Banner>
      <div>
        <h2></h2>
        <Slider {...settings}>
          <div>
            <img src="/images/workingone.png" />
          </div>
          <div>
            <img src="/images/workingtwo.png" />
          </div>
          <div>
            a
            <img src="/images/workingthree.png" />
          </div>
          <div>
            <img src="images/workingfour.png" />
          </div>
        </Slider>
      </div>
    </Banner>
  );
}
