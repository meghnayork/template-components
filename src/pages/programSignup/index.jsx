import React from "react";
import Header from "../../components/header";
import PageBanner from "../../components/pageBanner";
import Accordion from "../../components/accordion";

const ProgramSignup = () => {
  // faq content :: start
  const faqContent = [
    {
      title: "Loyalty Points",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    },
    {
      title: "Exclusive Discounts",
      content:
        "Enjoy VIP access to unbeatable discounts on our premium products and services. Because you deserve more for less!",
    },
    {
      title: "Early Access",
      content:
        "Be the trendsetter! Subscribers get exclusive early access to our latest products and dazzling sales events. Stay ahead of the curve.",
      img: "https://pierson-public-static.s3.us-east-2.amazonaws.com/Assets/early-access.svg",
    },
  ];
  // faq content :: end
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
        className={"full-banner"}
        imageBanner={true}
        image={
          "https://pierson-public-static.s3.us-east-2.amazonaws.com/Assets/discount-offer.svg"
        }
      />
      {/* page banner :: end */}

      {/* faq section :: start */}
      <div className="faq-section">
        <Accordion content={faqContent} withIcon={true} />
      </div>
    </div>
  );
};

export default ProgramSignup;
