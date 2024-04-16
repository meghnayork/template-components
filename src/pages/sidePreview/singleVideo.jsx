import React, { useState, useEffect } from "react";
import RatingStar from "../../components/ratingStar";
import { Link } from "react-router-dom";
import CTABanner from "../../components/ctaBanner";
import Header from "../../components/header";
import VideoBanner from "../../components/videoBanner";
import ProductInfo from "../../components/productInfo";
import {
  extractDataFromUrl,
  fetchHighestPriceProduct,
} from "../../utils/functions";

const SingleVideo = () => {
  const [productId, setProductId] = useState([]);
  const [domain, setDomain] = useState("");
  const [checkout, setCheckout] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  // domain and product id from url :: start
  useEffect(() => {
    const { productIdArray, checkoutLink, domain } = extractDataFromUrl(
      window.location.href
    );

    if (productIdArray.length > 0) {
      setProductId(productIdArray);
      setCheckout(checkoutLink);
    }

    if (domain) {
      setDomain(domain);
    }
  }, []);
  // domain and product id from url :: end

  // product data fetch :: start
  useEffect(() => {
    fetchHighestPriceProduct(domain, productId, setFilteredProducts);
  }, [domain, productId]);
  // product data fetch :: end

  return (
    <div className="full-page">
      {/* ========== side preview :: start ========== */}
      <div className="preview-wrap">
        <div className="preview-pane">
          {/* product preview :: start */}
          <div className="product-tab">
            <h4 className="preview-heading">
              Still thinking about our Product?
            </h4>

            <div className="side-img">
              <img
                src={
                  filteredProducts.length === 0
                    ? "https://pierson-public-static.s3.us-east-2.amazonaws.com/Assets/oars-face-wash-product.jpg"
                    : filteredProducts.variants[0].featured_image.src
                }
                alt=""
              />
            </div>

            <div className="product-bottom flex flex-between">
              <div className="flex align-center product-rating-wrap">
                <RatingStar rating={4} />
                <Link className="review-count">2 Reviews</Link>
              </div>

              <CTABanner
                link={checkout}
                ctaContent={"Get 15% Off"}
                className="offer-cta"
              />
            </div>
          </div>
          {/* product preview :: end */}
        </div>
      </div>
      {/* ========== side preview :: end ========== */}

      {/* ========== mobile slide :: start ========== */}
      <div className="mobile-slide fix-width pb-0 h-100">
        {/* main video :: start */}
        <div className="position-relative">
          {/* header :: start */}
          <Header
            enableCart={true}
            productInCart={productId ? productId.length : 0}
            logoImg={
              "https://d1unenfz496pdf.cloudfront.net/Assets/logo-white.png"
            }
            brandTitle={"Brand Logo Title"}
          />
          {/* header :: end */}

          {/* video banner :: start */}
          <VideoBanner
            video={
              "https://pierson-public-static.s3.us-east-2.amazonaws.com/Assets/shopifyAd2.mp4"
            }
          />
          {/* video banner :: end */}

          {/* product banner :: start */}
          <ProductInfo
            ctaText={"Checkout now"}
            ctaLink={checkout}
            position="absolute"
            title={
              filteredProducts.length === 0
                ? "Product Name"
                : filteredProducts.title
            }
            desc={
              filteredProducts.length > 0 && filteredProducts.variants[0].title
            }
            price={
              filteredProducts.length > 0
                ? `$${filteredProducts.variants[0].price}`
                : "$22"
            }
            // originalPrice="$25"
            discount="20%"
            productImage={
              filteredProducts === null || filteredProducts.length === 0
                ? "https://d1unenfz496pdf.cloudfront.net/Assets/product.jpeg"
                : filteredProducts.variants[0].featured_image.src
            }
          />
          {/* product banner :: end */}
        </div>
        {/* main video :: end */}
      </div>
      {/* ========== mobile slide :: end ========== */}
    </div>
  );
};

export default SingleVideo;
