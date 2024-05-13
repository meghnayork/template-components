import React, { useEffect, useRef, useState } from "react";
import Header from "../../components/header";
import CTABanner from "../../components/ctaBanner";
import SliderWithProgressBar from "../../components/sliderWithProgressbar";
import { extractDataFromUrl } from "../../utils/functions";
import video1 from "../../assets/media/videos/video1.mp4";
import video2 from "../../assets/media/videos/video2.mp4";
import video3 from "../../assets/media/videos/video3.mp4";
import video4 from "../../assets/media/videos/video4.mp4";
import video5 from "../../assets/media/videos/video5.mp4";
import logo from "../../assets/media/images/logo.png";

const ObviVideoSlider = () => {
  const [domain, setDomain] = useState("");
  const [productId, setProductId] = useState([]);
  const [checkout, setCheckout] = useState("/");

  // carousel settings start
  const settings = {
    dots: true,
    arrows: false,
    infinite: false,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "25px",
    swipeToSlide: true,
    pauseOnHover: false,
  };
  // carousel settings end

  useEffect(() => {
    const { productIdArray, checkoutLink, domain } = extractDataFromUrl(
      window.location.href
    );

    if (productIdArray.length > 0) {
      setProductId(productIdArray);
    }

    if (domain) {
      setDomain(domain);
    }
  }, []);

  useEffect(() => {
    generateCartLink();
  }, [productId]);

  const generateCartLink = () => {
    const productStrings = productId
      .map((product) => product.id + ":" + parseFloat(product.quantity))
      .join(",");
    // Constructing the link
    setCheckout(`${domain}/cart/${productStrings}`);
  };

  // slides :: start
  const slides = [video1, video2, video3, video4, video5];
  // slides :: end

  return (
    <div className="mobile-slide">
      <div className="video-slider-progress-wrap">
        <Header
          position={"relative"}
          logoImg={logo}
          brandTitle={"Real Customers, Real Results - Get Obvi Today! "}
          variant="solid"
          enableCart={true}
          productInCart={productId.length > 0 ? productId.length : 0}
        />

        {/* video slider :: start */}
        <SliderWithProgressBar
          settings={settings}
          slides={slides}
          slideWidth={340}
        />
        {/* video slider :: end */}

        {/* cta banner :: start */}
        <CTABanner
          ctaContent={"Complete Checkout"}
          className={"position-relative"}
          isIcon={false}
          isTextCenter={true}
          link={checkout}
        />
        {/* cta banner :: end */}
      </div>
    </div>
  );
};

export default ObviVideoSlider;
