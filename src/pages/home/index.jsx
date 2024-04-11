import React from "react";
import Header from "../../components/header";
import ProductInfo from "../../components/productInfo";
import VideoBanner from "../../components/videoBanner";

const Home = () => {
  return (
    <div className="mobile-slide">
      {/* header :: start */}
      <Header
        logoImg={
          "https://d3g4zjp5cjxctn.cloudfront.net/BrandSettings/72812888367/Images/DD-Logo_1200x1200_1709835323111.png"
        }
        brandTitle={"AM Routine with Oars + Alps"}
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
        title="Wake Up Eye Stick"
        price="$22"
        originalPrice="$25"
        discount="20%"
        productImage={
          "https://d1unenfz496pdf.cloudfront.net/Assets/product.jpeg"
        }
      />
      {/* product banner :: end */}
    </div>
  );
};

export default Home;
