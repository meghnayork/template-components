import React from "react";
import Header from "../../components/header";
import CTABanner from "../../components/ctaBanner";
import AnnouncementBar from "../../components/announcementBar";
import ProgressBar from "../../components/progressBar";
import HorizontalProductCard from "../../components/horizontalProductCard";
import { Link } from "react-router-dom";

const Cart = () => {
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

      {/* announcement bar :: start */}
      <AnnouncementBar
        position={"relative"}
        content={`We’ve reserved your order! <br /> Checkout within <b>9:38</b> to guarantee your order.`}
      />
      {/* announcement bar :: end */}

      <div className="body-content">
        {/* progressbar :: start */}
        <ProgressBar addedAmout="20" />
        {/* progressbar :: end */}

        {/* product card :: start */}
        <HorizontalProductCard
          productImg={
            "https://pierson-public-static.s3.us-east-2.amazonaws.com/Assets/HarryPotter_GoldenSnitch.png"
          }
          title={"Product Name"}
          decs={"Variant"}
          price={"22.00"}
          qty={5}
          remove={() => console.log("removed")}
          totalPrice={(data) => console.log(data)}
        />
        {/* product card :: end */}

        {/* shopping btn :: start */}
        <div className="flex flex-end">
          <Link to={"/"} className="btn btn-dark">
            Continue Shopping
          </Link>
        </div>
        {/* shopping btn :: end */}
      </div>

      {/* cta banner :: start */}
      <CTABanner ctaContent={"Checkout Now"} />
      {/* cta banner :: end */}
    </div>
  );
};

export default Cart;
