import React, { useState } from "react";
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
import RadioButton from "../../components/radioButton";

const IntakeShop = () => {
  const [price, setPrice] = useState({
    originalPrice: "$39.99",
    price: "$35.99",
  });

  const onChange = (e) => {
    if (e.target.value == 15) {
      setPrice({
        originalPrice: "$39.99",
        price: "$35.99",
      });
    } else {
      setPrice({
        originalPrice: "$44.99",
        price: "$49.99",
      });
    }
  };

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
        "https://pierson-public-static.s3.us-east-2.amazonaws.com/Assets/intake-img-slider.jpg",
      alt: "Intake 1",
    },
    {
      id: 2,
      imageUrl:
        "https://pierson-public-static.s3.us-east-2.amazonaws.com/Assets/intake-img-slider2.jpg",
      alt: "Intake 2",
    },
    {
      id: 3,
      imageUrl:
        "https://pierson-public-static.s3.us-east-2.amazonaws.com/Assets/intake-img-slider3.jpg",
      alt: "Intake 3",
    },
    {
      id: 4,
      imageUrl:
        "https://pierson-public-static.s3.us-east-2.amazonaws.com/Assets/intake-img-slider4.jpg",
      alt: "Intake 4",
    },
  ];
  // carousel slides end

  // description list items start
  const descList = [
    "Reduce snoring",
    "Improve oral health",
    "Increase energy levels",
    "Lower heart rate",
    "Boost oxygen absorption",
    "Optimize performance",
    "Maximize recovery",
  ];
  // description list items end

  // benefits start
  const benefits = ["30 Day Money Back Guarantee", "Free Returns"];
  // benefits end

  // tabs start
  const tabs = [
    {
      title: "Product Details",
      content: (
        <ul>
          <li>15 or 30 day/night supply of Intake Tabs</li>
          <li>1 Magnetic Applicator for perfect Intake Tab placement</li>
          <li>4 Intake Bands in our most common sizes + free resizing</li>
        </ul>
      ),
    },
    {
      title: "FAQs",
      content: (
        <ul>
          <li>
            <b>Who is Intake For? </b> <br />
            If you snore, have trouble sleeping, wake up with a dry mouth, or
            want to boost your workouts — try Intake. Trust us.
          </li>
          <li>
            <b>Do the magnets go inside your nose?</b> <br />
            Yikes! This is America, not Dante’s Inferno. Intake sits comfortably
            on the outside of your nose. The magnets are secured on the ends of
            the reusable Band, and the breathing Tabs (which contain the steel
            disk the magnet attaches to) are designed to adhere to the outer
            skin on your nose, just above each nostril.
          </li>
          <li>
            <b>Will it help my snoring?</b> <br />
            Intake was designed to hold up to the most intense workouts and
            conditions, and that’s what makes it SO effective for nightly wear.
            Our two part system and size range means your nose will be held open
            more than you’ve ever felt, and it will stay that way until you take
            it off.
          </li>
          <li>
            <b>Intake vs. Nasal Strips</b>
            <br />
            Intake’s two-part design allows longer wear time than nasal
            strips—it won’t come off while you’re sleeping, and it won’t come
            off while you’re exercising.
          </li>
        </ul>
      ),
    },
    {
      title: "Shipping",
      content: (
        <ul>
          <li>
            Orders are typically processed and shipped same day or within 1
            business day.
          </li>
          <li>Standard shipping takes 3-5 business days inside the US.</li>
          <li>
            We offer free standard shipping on orders &gt; $40 and free priority
            shipping on orders &gt; $60 inside of the US.
          </li>
        </ul>
      ),
    },
  ];
  // tabs end

  // radio button values :: start
  var radioVal = [
    {
      value: "black",
      element: "<p>Black Bands</p>",
      checked: true,
    },
    {
      value: "white",
      element: "<p>White Bands</p>",
    },
  ];

  var qtyVal = [
    {
      value: "15",
      element: "<p>15 Uses</p>",
      checked: true,
    },
    {
      value: "30",
      element: "<p>30 Uses</p>",
    },
  ];
  // radio button values :: end

  // Rating start
  const rating = [
    {
      title: "Makes a difference",
      rating: 5,
      feedback:
        "My wife thinks it makes a difference in my snoring, and I haven’t woken up feeling better rested since I started using Intake",
      name: "Darren S",
      verified: true,
    },
    {
      title: "A-W-E-S-O-M-E",
      rating: 5,
      feedback:
        "Love these things! My girlfriend said she can hear me breathing better (because that’s how bad it sounded on its own). Haven’t really snored since switching!",
      name: "Dante F.",
      verified: true,
    },
    {
      title: "Game Changer!",
      rating: 5,
      feedback:
        "Improves sleep and has helped me correct my sinus issues by breathing out of the nostril that is usually clogged up.",
      name: "Justin S.",
      verified: true,
    },
  ];
  // Rating end

  return (
    <div className="mobile-slide">
      {/* header :: start */}
      <Header
        position={"relative"}
        logoImg={
          "https://pierson-public-static.s3.us-east-2.amazonaws.com/Assets/intake-logo-new.png"
        }
        brandTitle={"Don’t Breathe Right, Breathe Better"}
        variant="solid"
      />
      {/* header :: end */}

      {/* page banner :: start */}
      <PageBanner
        imageBanner={false}
        carouselBanner={true}
        carouselSettings={setting}
      >
        {slides.map((slide, index) => (
          <div key={index}>
            <div key={slide.id} className="banner-carousel-item">
              <img src={slide.imageUrl} alt={slide.alt} />
            </div>
          </div>
        ))}
      </PageBanner>
      {/* page banner :: end */}

      {/* shop product info :: start */}
      <ShopProductInfo
        heading={"Intake Starter Kit"}
        title={"30 Day Money Back Guarantee"}
        originalPrice={price.originalPrice}
        price={price.price}
        rating={5}
        totalRating={1442}
      />
      {/* shop product info :: end */}

      {/* sort description :: start */}
      <SortDescPoints descList={descList} />
      {/* sort description :: end */}

      {/* color button :: start */}
      <RadioButton
        outlineButton={true}
        options={radioVal}
        onChange={(data) => console.log(data)}
        name="colorButton"
      />
      {/* color button :: end */}

      {/* qty button :: start */}
      <RadioButton
        name="qtyButton"
        outlineButton={true}
        options={qtyVal}
        onChange={(data) => console.log(data)}
      />
      {/* qty button :: end */}

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
        <h4 className="heading">What Sets Us Apart</h4>
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
        <h4 className="review-heading">Don’t Take Our Word For it</h4>
        <div className="overall-rating">
          <RatingStar rating={5} />
          <p className="average-rating">5.0</p>
          <p className="total-rating-count">1442 Reviews</p>
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
      <CTABanner withFullBg={true} ctaContent={"Add To Cart"} />
      {/* cta banner :: end */}
    </div>
  );
};

export default IntakeShop;
