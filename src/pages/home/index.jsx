import React from "react";
import Header from "../../components/header";
import ProductInfo from "../../components/productInfo";
import VideoBanner from "../../components/videoBanner";
import CTABanner from "../../components/ctaBanner";
import AnnouncementBar from "../../components/announcementBar";

const Home = () => {
  return (
    <div className="mobile-slide">
      {/* header :: start */}
      <Header
        logoImg={"https://d1unenfz496pdf.cloudfront.net/Assets/logo-white.png"}
        brandTitle={"Brand Logo Title"}
        variant="solid"
        enableCart={true}
      />
      {/* header :: end */}

      {/* announcement bar :: start */}
      {/* <AnnouncementBar content={`We’ve reserved your order! <br /> Checkout within <b>9:38</b> to guarantee your order.`} /> */}
      {/* announcement bar :: end */}

      {/* video banner :: start */}
      <VideoBanner
        video={
          "https://pierson-public-static.s3.us-east-2.amazonaws.com/Assets/shopifyAd.mp4"
        }
        withProgress={true}
      />
      {/* video banner :: end */}

      {/* product banner :: start */}
      {/* <ProductInfo
        title="Product Name"
        price="$22"
        originalPrice="$25"
        discount="20%"
        productImage={
          "https://d1unenfz496pdf.cloudfront.net/Assets/product.jpeg"
        }
      /> */}
      {/* product banner :: end */}

      {/* cta banner :: start */}
      <CTABanner ctaContent={"Get 15% Off"} />
      {/* cta banner :: end */}
    </div>
  );
};

export default Home;
