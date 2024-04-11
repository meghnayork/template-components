import React from "react";
import Header from "../../components/header";
import ProductInfo from "../../components/productInfo";
import VideoBanner from "../../components/videoBanner";

const Home2 = () => {
  return (
    <div className="mobile-slide">
      {/* header :: start */}
      <Header
        logoImg={"https://d1unenfz496pdf.cloudfront.net/Assets/logo-white.png"}
        brandTitle={"AM Routine with Oars + Alps"}
      />
      {/* header :: end */}

      {/* video banner :: start */}
      <VideoBanner
        video={
          "https://pierson-public-static.s3.us-east-2.amazonaws.com/Assets/shopifyAd.mp4"
        }
        // withProgress={true}
      />
      {/* video banner :: end */}

      {/* product banner :: start */}
      <ProductInfo
        title="Wake Up Eye Stick"
        price="$22"
        originalPrice="$25"
        discount="20%"
        desc="Product Callouts"
        productImage={
          "https://d1unenfz496pdf.cloudfront.net/Assets/product.jpeg"
        }
      />
      {/* product banner :: end */}
    </div>
  );
};

export default Home2;
