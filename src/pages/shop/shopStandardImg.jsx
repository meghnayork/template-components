import React from "react";
import Header from "../../components/header";
import CTABanner from "../../components/ctaBanner";
import PageBanner from "../../components/pageBanner";
import ShopProductInfo from "../../components/shopProductInfo";
import SortDescPoints from "../../components/sortDescPoints";
import Variant from "../../components/variant";
import QtySelector from "../../components/qtySelector";
import Badge from "../../components/badge";
import Tabs from "../../components/tabs";
import Slider from "react-slick";
import RatingStar from "../../components/ratingStar";
import ReviewCard from "../../components/reviewCard";

const ShopStandardImg = () => {
  // carousel settings start
  const setting = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    cssEase: "linear",
  };
  // carousel settings end

  // carousel slides start
  const slides = [
    {
      id: 1,
      imageUrl:
        "https://pierson-public-static.s3.us-east-2.amazonaws.com/Assets/HarryPotter_GoldenSnitch.png",
      alt: "Slide 1",
    },
    {
      id: 2,
      imageUrl:
        "https://pierson-public-static.s3.us-east-2.amazonaws.com/Assets/HarryPotter_GoldenSnitch.png",
      alt: "Slide 2",
    },
    {
      id: 3,
      imageUrl:
        "https://pierson-public-static.s3.us-east-2.amazonaws.com/Assets/HarryPotter_GoldenSnitch.png",
      alt: "Slide 3",
    },
    {
      id: 4,
      imageUrl:
        "https://pierson-public-static.s3.us-east-2.amazonaws.com/Assets/HarryPotter_GoldenSnitch.png",
      alt: "Slide 4",
    },
  ];
  // carousel slides end

  // description list items start
  const descList = ["Value Prop", "Value Prop", "Value Prop"];
  // description list items end

  // variant images start
  const variantImg = [
    "https://pierson-public-static.s3.us-east-2.amazonaws.com/Assets/ring-product4.svg",
    "https://pierson-public-static.s3.us-east-2.amazonaws.com/Assets/ring-product3.svg",
    "https://pierson-public-static.s3.us-east-2.amazonaws.com/Assets/ring-product2.svg",
    "https://pierson-public-static.s3.us-east-2.amazonaws.com/Assets/ring-product1.svg",
    "https://pierson-public-static.s3.us-east-2.amazonaws.com/Assets/HarryPotter_GoldenSnitch.png",
  ];
  // variant images end

  // benefits start
  const benefits = [
    "Free Samples on Orders over $XXX",
    "Free Shipping",
    "Other exciting thing",
  ];
  // benefits end

  // tabs start
  const tabs = [
    {
      title: "Product Details",
      content: (
        <ul>
          <li>
            <b>What it does: </b> This eye serum spreads easily with a cooling
            metal rollerball to help provide an immediate soothing feeling to
            your under-eye area. The serum also contains ingredients that help
            cool and de-puff. Caffeine helps increase microcirculation to
            minimize puffiness and inflammation, while Aloe Vera soothes the
            skin, Alpine Caribou Moss™ helps promote skin elasticity and Persian
            Silk Tree Extract helps repair tired-looking skin.
          </li>
          <li>
            <b>Size : 0.5 fl oz. / 15 ml.</b>
          </li>
        </ul>
      ),
    },
    {
      title: "FAQ & Features",
      content: (
        <ul>
          <li>
            <b>What it does: </b> This eye serum spreads easily with a cooling
            metal rollerball to help provide an immediate soothing feeling to
            your under-eye area. The serum also contains ingredients that help
            cool and de-puff. Caffeine helps increase microcirculation to
            minimize puffiness and inflammation, while Aloe Vera soothes the
            skin, Alpine Caribou Moss™ helps promote skin elasticity and Persian
            Silk Tree Extract helps repair tired-looking skin.
          </li>
          <li>
            <b>Size : 0.5 fl oz. / 15 ml.</b>
          </li>
          <li>
            <b>Color description:</b> Gold
          </li>
        </ul>
      ),
    },
    {
      title: "Ingredients",
      content: (
        <ul>
          <li>
            <b>What it does: </b> This eye serum spreads easily with a cooling
            metal rollerball to help provide an immediate soothing feeling to
            your under-eye area. The serum also contains ingredients that help
            cool and de-puff. Caffeine helps increase microcirculation to
            minimize puffiness and inflammation, while Aloe Vera soothes the
            skin, Alpine Caribou Moss™ helps promote skin elasticity and Persian
            Silk Tree Extract helps repair tired-looking skin.
          </li>
          <li>
            <b>Size : 0.5 fl oz. / 15 ml.</b>
          </li>
          <li>
            <b>Color description:</b> Gold
          </li>
          <li>
            <b>Finish:</b> Metallic
          </li>
        </ul>
      ),
    },
  ];
  // tabs end

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

  return (
    <div className="mobile-slide">
      {/* header :: start */}
      <Header
        position={"relative"}
        logoCircle={true}
        logoImg={"https://d1unenfz496pdf.cloudfront.net/Assets/logo-white.png"}
        brandTitle={"Brand Logo Title"}
        variant="solid"
      />
      {/* header :: end */}

      {/* page banner :: start */}
      <PageBanner
        imageBanner={true}
        image={
          "https://pierson-public-static.s3.us-east-2.amazonaws.com/Assets/HarryPotter_GoldenSnitch.png"
        }
      />
      {/* page banner :: end */}

      {/* shop product info :: start */}
      <ShopProductInfo
        heading={"Setup your Subscription!"}
        title={"Product Name"}
        originalPrice={"$29.22"}
        price={"$23.22"}
        discount={"-20%"}
        rating={3}
        totalRating={6}
      />
      {/* shop product info :: end */}

      {/* sort description :: start */}
      <SortDescPoints descList={descList} />
      {/* sort description :: end */}

      {/* variant :: start */}
      <Variant
        variantImg={variantImg}
        onSelect={(imageUrl) => console.log(imageUrl)}
      />
      {/* variant :: end */}

      {/* dropdown section :: start */}
      <div className="dropdown-section">
        <label htmlFor="dropdown" className="label-text">
          Dropdown Title
        </label>
        <select id="dropdown" className="dropdown">
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </select>
      </div>
      {/* dropdown section :: end */}

      {/* dropdown section :: start */}
      <div className="dropdown-section">
        <label htmlFor="dropdown" className="label-text">
          Dropdown Title
        </label>
        <select id="dropdown" className="dropdown">
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </select>
      </div>
      {/* dropdown section :: end */}

      {/* quantity section :: start */}
      <QtySelector onChange={(data) => console.log(data)} />
      {/* quantity section :: end */}

      {/* benefits section :: start */}
      <div className="benefits-section">
        {benefits.map((value, index) => (
          <Badge key={index} variant="dark" text={value} />
        ))}
      </div>
      {/* benefits section :: end */}

      {/* tabs :: start */}
      <Tabs tabs={tabs} />
      {/* tabs :: end */}

      {/* carousel :: start */}
      <div className="carousel-wrap">
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
      {/* carousel :: end */}

      {/* review section :: start */}
      <div className="review-section pb-extra-100">
        <h4 className="review-heading">Reviews Headline</h4>
        <div className="overall-rating">
          <RatingStar rating={4} />
          <p className="average-rating">5.0</p>
          <p className="total-rating-count">384738 Reviews</p>
        </div>

        <div className="all-ratings">
          {rating.map((rating, index) => (
            <ReviewCard
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

      {/* cta banner :: start */}
      <CTABanner withFullBg={true} ctaContent={"Subscribe Now"} />
      {/* cta banner :: end */}
    </div>
  );
};

export default ShopStandardImg;
