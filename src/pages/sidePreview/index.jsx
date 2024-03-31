import React, { useState, useEffect } from "react";
import RatingStar from "../../components/ratingStar";
import { Link } from "react-router-dom";
import CTABanner from "../../components/ctaBanner";
import Header from "../../components/header";
import VideoBanner from "../../components/videoBanner";
import ProductInfo from "../../components/productInfo";
import Slider from "react-slick";
import BenefitsCard from "../../components/benefitsCard";
import Accordion from "../../components/accordion";

const SidePreview = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentVideoUrl, setCurrentVideoUrl] = useState(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    setIsSmallScreen(window.innerWidth <= 992);
  }, []);

  // carousel settings :: start
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    infinite: false,
  };
  // carousel settings :: end

  // video urls :: start
  const videoUrls = [
    "https://pierson-public-static.s3.us-east-2.amazonaws.com/Assets/shopifyAd4.mp4",
    "https://pierson-public-static.s3.us-east-2.amazonaws.com/Assets/shopifyAd3.mp4",
    "https://pierson-public-static.s3.us-east-2.amazonaws.com/Assets/shopifyAd6.mp4",
    "https://pierson-public-static.s3.us-east-2.amazonaws.com/Assets/shopifyAd3.mp4",
  ];
  // video urls :: end

  // video controls :: start
  const openSidebar = (videoUrl, videoId) => {
    var video = document.getElementById(videoId);

    if (!isSmallScreen) {
      setSidebarOpen(true);
      setCurrentVideoUrl(videoUrl);
    } else {
      setCurrentVideoUrl(videoUrl);
      if (video.paused) {
        pauseAllVideos();
        video.play();
      } else {
        video.pause();
      }
    }
  };

  function pauseAllVideos() {
    var videos = document.querySelectorAll("video");
    videos.forEach(function (video) {
      video.pause();
      // var playBtn = video.nextElementSibling;
      // playBtn.style.display = "block";
    });
  }

  const closeSidebar = () => {
    setSidebarOpen(false);
    setCurrentVideoUrl(null);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };
  // video controls :: end

  // faq content :: start
  const faqContent = [
    {
      title: "FAQ question",
      content:
        "This eye serum spreads easily with a cooling metal rollerball to help provide an immediate soothing feeling to your under-eye area. The serum also contains ingredients that help cool and de-puff. Caffeine helps increase microcirculation to minimize puffiness and inflammation, while Aloe Vera soothes the skin, Alpine Caribou Moss™ helps promote skin elasticity and Persian Silk Tree Extract helps repair tired-looking skin.",
    },
    {
      title: "FAQ question",
      content:
        "This eye serum spreads easily with a cooling metal rollerball to help provide an immediate soothing feeling to your under-eye area. The serum also contains ingredients that help cool and de-puff. Caffeine helps increase microcirculation to minimize puffiness and inflammation, while Aloe Vera soothes the skin, Alpine Caribou Moss™ helps promote skin elasticity and Persian Silk Tree Extract helps repair tired-looking skin.",
    },
    {
      title: "FAQ question",
      content:
        "This eye serum spreads easily with a cooling metal rollerball to help provide an immediate soothing feeling to your under-eye area. The serum also contains ingredients that help cool and de-puff. Caffeine helps increase microcirculation to minimize puffiness and inflammation, while Aloe Vera soothes the skin, Alpine Caribou Moss™ helps promote skin elasticity and Persian Silk Tree Extract helps repair tired-looking skin.",
    },
    {
      title: "FAQ question",
      content:
        "This eye serum spreads easily with a cooling metal rollerball to help provide an immediate soothing feeling to your under-eye area. The serum also contains ingredients that help cool and de-puff. Caffeine helps increase microcirculation to minimize puffiness and inflammation, while Aloe Vera soothes the skin, Alpine Caribou Moss™ helps promote skin elasticity and Persian Silk Tree Extract helps repair tired-looking skin.",
    },
  ];
  // faq content :: end

  return (
    <div className="full-page">
      {/* side preview :: start */}
      <div className="preview-wrap">
        <div className="preview-pane">
          {/* product preview :: start */}
          <div className="product-tab">
            <h4 className="preview-heading">
              Still thinking about our Product Name?
            </h4>

            <div className="side-img">
              <img
                src="https://pierson-public-static.s3.us-east-2.amazonaws.com/Assets/oars-face-wash-product.jpg"
                alt=""
              />
            </div>

            <div className="product-bottom flex flex-between">
              <div className="flex align-center product-rating-wrap">
                <RatingStar rating={4} />
                <Link className="review-count">2 Reviews</Link>
              </div>

              <CTABanner ctaContent={"Get 15% Off"} className="offer-cta" />
            </div>
          </div>
          {/* product preview :: end */}

          {/* video preview :: start */}
          {sidebarOpen && (
            <div className="video-sidebar">
              <div className="video-wrapper">
                <video key={currentVideoUrl} muted={isMuted} autoPlay>
                  <source src={currentVideoUrl} type="video/mp4" />
                </video>
              </div>
              <button className="sidebar-close" onClick={closeSidebar}>
                &#10005;
              </button>

              <div className="mute-wrap" onClick={toggleMute}>
                {!isMuted ? (
                  <svg
                    width="32"
                    height="31"
                    viewBox="0 0 32 31"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M29.9999 15.4995C29.9999 17.7118 29.4208 19.835 28.3667 21.6835L26.4291 19.7459C27.0527 18.4393 27.3867 16.9917 27.3867 15.492C27.3867 11.5426 25.0556 7.9643 21.4328 6.35333C20.9577 6.14546 20.6533 5.67034 20.6533 5.16552C20.6533 4.72009 20.8686 4.31178 21.2472 4.06679C21.6184 3.82923 22.0787 3.78469 22.487 3.97028C27.0527 5.98956 30.0073 10.5107 30.0073 15.492L29.9999 15.4995Z"
                      fill="black"
                      fillOpacity="0.75"
                    />
                    <path
                      d="M24.7141 15.5138C24.7141 16.2636 24.5805 16.9837 24.3281 17.6444L20.6533 13.9697V9.75293C23.0215 10.5918 24.7141 12.8561 24.7141 15.5138Z"
                      fill="black"
                      fillOpacity="0.75"
                    />
                    <path
                      d="M17.5281 2.44807V10.8444L11.7598 5.0761L16.1101 1.7428C16.6892 1.3048 17.5281 1.71311 17.5281 2.44807Z"
                      fill="black"
                      fillOpacity="0.75"
                    />
                    <path
                      d="M3.42238 9.1665L17.5276 23.2792V28.7505C17.5276 29.4855 16.6887 29.9012 16.1097 29.4558L6.41418 22.0394H1.85595C0.831467 22.0394 0 21.2079 0 20.1834V11.0225C0 9.99797 0.824044 9.1665 1.85595 9.1665H3.41496H3.42238Z"
                      fill="black"
                      fillOpacity="0.75"
                    />
                    <path
                      d="M29.9994 31C29.6208 31 29.2496 30.8589 28.9601 30.5694L0.890639 2.49997C0.319006 1.92834 0.319006 1.00036 0.890639 0.428725C1.46227 -0.142908 2.39025 -0.142908 2.96188 0.428725L31.0313 28.4982C31.603 29.0698 31.603 29.9978 31.0313 30.5694C30.7418 30.8589 30.3706 31 29.992 31H29.9994Z"
                      fill="black"
                      fillOpacity="0.75"
                    />
                  </svg>
                ) : (
                  <svg
                    width="32"
                    height="31"
                    viewBox="0 0 32 31"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.15838 10.9306C0.445373 9.74229 0.445373 8.25771 1.15838 7.06937C1.37596 6.70674 1.73641 6.45272 2.1511 6.36978L3.84413 6.03117C3.94499 6.011 4.03591 5.95691 4.10176 5.87788L6.17085 3.39498C7.3534 1.97592 7.94468 1.26638 8.47234 1.45742C9 1.64846 9 2.57207 9 4.41928L9 13.5807C9 15.4279 9 16.3515 8.47234 16.5426C7.94468 16.7336 7.3534 16.0241 6.17085 14.605L4.10176 12.1221C4.03591 12.0431 3.94499 11.989 3.84413 11.9688L2.1511 11.6302C1.73641 11.5473 1.37596 11.2933 1.15838 10.9306Z"
                      fill="#000000BF"
                    />
                    <path
                      d="M11.5355 5.46447C12.4684 6.39732 12.9948 7.66105 13 8.9803C13.0052 10.2996 12.4888 11.5674 11.5633 12.5076"
                      stroke="#000000BF"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M15.6569 3.34314C17.1494 4.83572 17.9916 6.85769 17.9999 8.96848C18.0083 11.0793 17.182 13.1078 15.7012 14.6121"
                      stroke="#000000BF"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                )}
              </div>
            </div>
          )}
          {/* video preview :: end */}
        </div>
      </div>
      {/* side preview :: end */}

      {/* mobile slide :: start */}
      <div className="mobile-slide fix-width">
        {/* main video :: start */}
        <div className="position-relative">
          {/* header :: start */}
          <Header
            logoImg={
              "https://d1unenfz496pdf.cloudfront.net/Assets/logo-white.png"
            }
            brandTitle={"Brand Logo Title"}
          />
          {/* header :: end */}

          {/* video banner :: start */}
          <VideoBanner
            video={
              "https://pierson-public-static.s3.us-east-2.amazonaws.com/Assets/shopifyAd.mp4"
            }
          />
          {/* video banner :: end */}

          {/* product banner :: start */}
          <ProductInfo
            position="absolute"
            title="Product Name"
            price="$22"
            originalPrice="$25"
            discount="20%"
            productImage={
              "https://d1unenfz496pdf.cloudfront.net/Assets/product.jpeg"
            }
          />
          {/* product banner :: end */}
        </div>
        {/* main video :: end */}

        {/* video carousel :: start */}
        <div className="video-carousel">
          <h3 className="heading">Video Carousel Headline</h3>
          <div className="video-slider-wrap">
            <Slider {...settings}>
              {videoUrls.map((videoUrl, index) => (
                <div key={index}>
                  <div className="carousel-video">
                    {/* Video component */}
                    <video id={`video-${index}`}>
                      <source src={videoUrl} type="video/mp4" />
                    </video>
                    {videoUrl !== currentVideoUrl && (
                      <button
                        className="video-play-btn btn"
                        key={videoUrl}
                        onClick={() => openSidebar(videoUrl, `video-${index}`)}
                      >
                        <svg
                          width="12"
                          height="13"
                          viewBox="0 0 12 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.087 5.61847C11.715 5.98105 11.715 6.88749 11.087 7.25006L1.9025 12.5527C1.2745 12.9153 0.489499 12.4621 0.4895 11.7369L0.4895 1.13159C0.4895 0.406439 1.2745 -0.0467805 1.9025 0.315795L11.087 5.61847Z"
                            fill="white"
                          />
                        </svg>
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
        {/* video carousel :: end */}

        {/* benefits cards :: start */}
        <div className="benefits-cards-wrap">
          <h3 className="heading">Value Prop + Image Stack</h3>

          <BenefitsCard title="Key Benefit 1" />
          <BenefitsCard title="Key Benefit 2" />
          <BenefitsCard title="Key Benefit 3" />
        </div>
        {/* benefits cards :: end */}

        {/* faq section :: start */}
        <div className="faq-section">
          <h3 className="heading">FAQ</h3>

          <Accordion content={faqContent} />
        </div>
        {/* faq section :: end */}
      </div>
      {/* mobile slide :: end */}
    </div>
  );
};

export default SidePreview;
