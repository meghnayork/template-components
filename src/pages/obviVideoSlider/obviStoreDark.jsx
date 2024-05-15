import React, { useState } from "react";
import BannerTitle from "../../components/darkComponents/bannerTitle";
import Slider from "react-slick";
import ProductInfo from "../../components/productInfo";
import SortDescPoints from "../../components/sortDescPoints";
import RatingStar from "../../components/ratingStar";
import ReviewCard from "../../components/reviewCard";
import VerticalProduct from "../../components/darkComponents/verticalProduct";

const obviStoreDark = () => {
  const [play, setPlay] = useState(true);
  const [currentVideoUrl, setCurrentVideoUrl] = useState(null);

  // carousel settings start
  const setting = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    swipeToSlide: true,
    // autoplay: true,
    autoplaySpeed: 3000,
    margin: "10px",
  };
  // carousel settings end

  // carousel settings :: start
  const videoSettings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    infinite: false,
  };
  // carousel settings :: end

  // carousel slides start
  const slides = [
    {
      id: 1,
      imageUrl:
        "https://pierson-public-static.s3.us-east-2.amazonaws.com/Assets/obvi-carousel-img-1.jpeg",
      alt: "obvi 1",
    },
    {
      id: 2,
      imageUrl:
        "https://pierson-public-static.s3.us-east-2.amazonaws.com/Assets/obvi-carousel-img-2.jpeg",
      alt: "obvi 2",
    },
    {
      id: 3,
      imageUrl:
        "https://pierson-public-static.s3.us-east-2.amazonaws.com/Assets/obvi-carousel-img-3.jpeg",
      alt: "obvi 3",
    },
    {
      id: 4,
      imageUrl:
        "https://pierson-public-static.s3.us-east-2.amazonaws.com/Assets/obvi-carousel-img-4.jpeg",
      alt: "obvi 4",
    },
    {
      id: 5,
      imageUrl:
        "https://pierson-public-static.s3.us-east-2.amazonaws.com/Assets/obvi-carousel-img-5.jpeg",
      alt: "obvi 5",
    },
  ];

  const slides2 = [
    {
      id: 1,
      imageUrl:
        "https://pierson-public-static.s3.us-east-2.amazonaws.com/Assets/obvi-carousel-img-6.jpeg",
      alt: "obvi 1",
    },
    {
      id: 2,
      imageUrl:
        "https://pierson-public-static.s3.us-east-2.amazonaws.com/Assets/obvi-carousel-img-7.jpeg",
      alt: "obvi 2",
    },
    {
      id: 3,
      imageUrl:
        "https://pierson-public-static.s3.us-east-2.amazonaws.com/Assets/obvi-carousel-img-8.jpeg",
      alt: "obvi 3",
    },
    {
      id: 4,
      imageUrl:
        "https://pierson-public-static.s3.us-east-2.amazonaws.com/Assets/obvi-carousel-img-9.jpeg",
      alt: "obvi 4",
    },
    {
      id: 5,
      imageUrl:
        "https://pierson-public-static.s3.us-east-2.amazonaws.com/Assets/obvi-carousel-img-10.jpeg",
      alt: "obvi 5",
    },
  ];
  // carousel slides end

  // slides :: start
  const videoUrls = [
    "https://d1unenfz496pdf.cloudfront.net/Assets/obvi-carousel-video1.mp4",
    "https://d1unenfz496pdf.cloudfront.net/Assets/obvi-carousel-video2.mp4",
    "https://d1unenfz496pdf.cloudfront.net/Assets/obvi-carousel-video3.mp4",
    "https://d1unenfz496pdf.cloudfront.net/Assets/obvi-carousel-video4.mp4",
    "https://d1unenfz496pdf.cloudfront.net/Assets/obvi-carousel-video5.mp4",
  ];
  // slides :: end

  // video controls :: start
  const openSidebar = (videoUrl, videoId) => {
    var video = document.getElementById(videoId);

    video.addEventListener("ended", () => setPlay(false));
    setCurrentVideoUrl(videoUrl);
    if (video.paused) {
      pauseAllVideos();
      video.play();
      setPlay(true);
    } else {
      video.pause();
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
  // video controls :: end

  // description list items start
  const descList = [
    "Metabolic Boost*",
    "Appetite Suppression*",
    "Efficient Fat Oxidation*",
    "Increases Scalp Coverage*",
    "Wrinkle Depth Reduction*",
    "Alleviates Joint Pain*",
  ];
  // description list items end

  // Rating start
  const rating = [
    {
      title: "Good",
      rating: 4,
      feedback:
        "I like the bit of cold the metal applicator provides as an extra little wake up. I noticed fairly quick resume when using this eye stick in terms of tighter skin, less puff, and no black circles. The product absorbs well and doesn’t feel sticky.",
      name: "Name L.",
      verified: true,
    },
    {
      title: "Good",
      rating: 4,
      feedback:
        "I like the bit of cold the metal applicator provides as an extra little wake up. I noticed fairly quick resume when using this eye stick in terms of tighter skin, less puff, and no black circles. The product absorbs well and doesn’t feel sticky.",
      name: "Name L.",
      verified: true,
    },
    {
      title: "Good",
      rating: 4,
      feedback:
        "I like the bit of cold the metal applicator provides as an extra little wake up. I noticed fairly quick resume when using this eye stick in terms of tighter skin, less puff, and no black circles. The product absorbs well and doesn’t feel sticky.",
      name: "Name L.",
      verified: true,
    },
  ];
  // Rating end

  // products :: start
  const products = [
    {
      id: 39666806194437,
      title: "30 Day Supply",
      variant: "$1.33 per serving",
      rating: "4.5",
      reviewCount: 2275,
      price: "$39.99",
      originalPrice: "$49.99",
      discount: "20%",
      ctaText: "Buy Now",
      img: "https://cdn.shopify.com/s/files/1/0031/8101/9185/files/1_1_-min_dea53112-a0d4-4a47-8ab5-87e7d3b81bfb.png?v=1705425456",
    },
    {
      id: 39666806161669,
      title: "90 Day Supply",
      variant: "$0.88 per serving, free shipping",
      rating: "4.5",
      reviewCount: 2275,
      price: "$79.99",
      originalPrice: "$149.97",
      discount: "46%",
      ctaText: "Buy Now",
      img: "https://cdn.shopify.com/s/files/1/0031/8101/9185/files/3x-min_f06d4c8c-0e55-4d51-a7a0-c3d7682d451e.png?v=1705425457",
    },
    {
      id: 39666806128901,
      title: "180 Day Supply",
      variant: "$0.72 per serving, free shipping",
      rating: "4.5",
      reviewCount: 2275,
      price: "$129.99",
      originalPrice: "$299.94",
      discount: "57%",
      ctaText: "Buy Now",
      img: "https://cdn.shopify.com/s/files/1/0031/8101/9185/files/6packnew_5550d972-6188-4d19-9fdd-04e178bfea56.png?v=1705425457",
    },
  ];
  // products :: end

  return (
    <div className="mobile-slide dark sticky-cta">
      {/* banner title :: start */}
      <BannerTitle
        titleBefore={"Lose an average of"}
        highlighted={"30 pounds"}
        titleAfter={"in 90 days*"}
      />
      {/* banner title :: end */}

      {/* page text :: start */}
      <div className="page-desc-section">
        <p>
          *Results may vary. Oral consumption of 150mg of Greenselect hytosome
          twice daily, combined with a reduced calorie diet resulted in an
          average of over 30lbs weight difference in 90 days.
        </p>
      </div>
      {/* page text :: end */}

      {/* carousel :: start */}
      <div className="carousel-wrap obvi-slide">
        <div>
          <Slider {...setting}>
            {slides.map((slide, index) => (
              <div key={index}>
                <div key={slide.id} className="carousel-item">
                  <img src={slide.imageUrl} alt={slide.alt} />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      {/* carousel :: end */}

      {/* cta :: start */}
      <ProductInfo
        rating={4}
        title="Collagenic Burn Elite"
        desc="90-day money-back guarantee"
        price="$39.99"
        originalPrice="$49.99"
        discount="20%"
        ctaLink="#obvi-products"
        productImage={
          "https://pierson-public-static.s3.us-east-2.amazonaws.com/Assets/burn-elite.png"
        }
      />
      {/* cta :: end */}

      {/* section title :: start */}
      <div className="page-section pb-10">
        <BannerTitle
          titleBefore={"These women saw a significant difference in "}
          highlighted={"under 90 days!"}
          textAlign="left"
        />
      </div>
      {/* section title :: end */}

      {/* video carousel :: start */}
      <div className="video-carousel">
        <div className="video-slider-wrap">
          <Slider {...videoSettings}>
            {videoUrls.map((videoUrl, index) => (
              <div key={index}>
                <div className="carousel-video">
                  {/* Video component */}
                  <video id={`video-${index}`}>
                    <source src={videoUrl} type="video/mp4" />
                  </video>
                  {(videoUrl !== currentVideoUrl || !play) && (
                    <button
                      className="video-play-btn btn"
                      key={videoUrl}
                      onClick={() => {
                        openSidebar(videoUrl, `video-${index}`);
                      }}
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

      {/* section title :: start */}
      <div className="page-section pb-10">
        <BannerTitle
          titleBefore={"Discover the benefits of daily use"}
          textAlign="left"
        />

        <div className="section-desc">
          <p>
            Age defying benefits of our collagen enriched thermogenic fat
            burner.
          </p>
        </div>

        {/* sort description :: start */}
        <SortDescPoints descList={descList} />
        {/* sort description :: end */}
      </div>
      {/* section title :: end */}

      {/* carousel :: start */}
      <div className="carousel-wrap obvi-slide">
        <div>
          <Slider {...setting}>
            {slides.map((slide, index) => (
              <div key={index}>
                <div key={slide.id} className="carousel-item">
                  <img src={slide.imageUrl} alt={slide.alt} />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      {/* carousel :: end */}

      {/* section title :: start */}
      <div className="page-section pb-10">
        <BannerTitle
          titleBefore={"Science backed & clinically shown to help you"}
          textAlign="left"
        />
      </div>
      {/* section title :: end */}

      {/* icon info :: start */}
      <div className="icon-info-wrap">
        <div className="icon-box">
          <div className="icon-wrap">
            <img
              src="https://pierson-public-static.s3.us-east-2.amazonaws.com/Assets/obvi-icon1.png"
              alt=""
            />
          </div>
          <p>280% More Weight Loss</p>
        </div>

        <div className="icon-box">
          <div className="icon-wrap">
            <img
              src="https://pierson-public-static.s3.us-east-2.amazonaws.com/Assets/obvi-icon2.png"
              alt=""
            />
          </div>
          <p>12% Reductionin BMI</p>
        </div>

        <div className="icon-box">
          <div className="icon-wrap">
            <img
              src="https://pierson-public-static.s3.us-east-2.amazonaws.com/Assets/obvi-icon3.png"
              alt=""
            />
          </div>
          <p>Keep Your Weight Off</p>
        </div>
      </div>
      {/* icon info :: end */}

      {/* image section :: start */}
      <div className="text-section-wrap img-banner">
        <div className="detail-img">
          <div className="offer-img">
            <div className="img-box">
              <img
                src="https://pierson-public-static.s3.us-east-2.amazonaws.com/Assets/obvi-product.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      {/* image section :: end */}

      {/* section title :: start */}
      <div className="page-section pb-10">
        <BannerTitle
          titleBefore={"Just 2 capsules. Once a day. Every day."}
          textAlign="left"
        />
      </div>
      {/* section title :: end */}

      {/* description points :: start */}
      <ul className="desc-list">
        <li>
          <span>Consistency is key!</span> You’ll begin to feel immediate
          benefits of energy & focus, however, it takes time and consistent use
          to maximize weight loss.
        </li>
        <li>
          <span>Clinically proven formulation.</span> Our fat burner with
          Greenselect Phytosome and{" "}
          <span className="highlighted">5 types of collagen </span> is backed by
          scientific research and rigorous testing.
        </li>
        <li>
          <span>Suggested Use.</span> Take 2 capsules daily. Preferably 1
          capsule in the morning and 1 capsule in the afternoon with food or
          after eating.
        </li>
      </ul>
      {/* description points :: end */}

      {/* section title :: start */}
      <div className="page-section pb-10">
        <BannerTitle
          titleBefore={"Hear from our customers."}
          textAlign="left"
        />
      </div>
      {/* section title :: end */}

      {/* review section :: start */}
      <div className="dark-review">
        <div className="overall-rating">
          <RatingStar rating={4} color={"pink"} />
          <p className="average-rating">5.0</p>
          <p className="total-rating-count">384738 Reviews</p>
        </div>

        <div className="all-ratings">
          {rating.map((rating, index) => (
            <ReviewCard
              color={"pink"}
              key={index}
              title={rating.title}
              feedback={rating.feedback}
              rating={rating.rating}
              name={rating.name}
              verified={rating.verified}
            />
          ))}
        </div>
      </div>
      {/* review section :: end */}

      {/* product card carousel :: start */}
      <div className="carousel-wrap obvi-slide" id="obvi-products">
        <div>
          <Slider {...setting}>
            {products.map((slide, index) => (
              <VerticalProduct
                title={slide.title}
                variant={slide.variant}
                img={slide.img}
                rating={slide.rating}
                ratingCount={slide.reviewCount}
                price={slide.price}
                originalPrice={slide.originalPrice}
                discount={slide.discount}
                ctaText={slide.ctaText}
                ctaLink={`https://myobvi.com/cart/${slide.id}:1`}
              />
            ))}
          </Slider>
        </div>
      </div>
      {/* product card carousel :: end */}
    </div>
  );
};

export default obviStoreDark;
