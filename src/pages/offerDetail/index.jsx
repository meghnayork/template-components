import React from "react";
import Header from "../../components/header";
import CTABanner from "../../components/ctaBanner";
import ImageOverlay from "../../components/imageOverlay";

const OfferDetail = () => {
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

      {/* body :: start */}
      <div className="offer-body detail-img">
        <div className="offer-img">
          <ImageOverlay
            img="https://pierson-public-static.s3.us-east-2.amazonaws.com/Assets/background-img.jpeg"
            text={"Purifying Scalp Scrub"}
            subText={"<span>$31.00</span> - $20.00"}
          />
        </div>

        {/* offer details :: start */}
        <div className="offer-detail">
          <h5 className="offer-heading">Here’s why you should join:</h5>

          <div className="offers">
            <ul>
              <li>
                <div className="check">
                  <svg
                    width="9"
                    height="8"
                    viewBox="0 0 9 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.768066 4.24246L3.02887 6.36196L8.30407 0.709961"
                      stroke="white"
                      stroke-width="1.413"
                    />
                  </svg>
                </div>
                Value Props
              </li>
              <li>
                <div className="check">
                  <svg
                    width="9"
                    height="8"
                    viewBox="0 0 9 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.768066 4.24246L3.02887 6.36196L8.30407 0.709961"
                      stroke="white"
                      stroke-width="1.413"
                    />
                  </svg>
                </div>
                Value Props
              </li>
              <li>
                <div className="check">
                  <svg
                    width="9"
                    height="8"
                    viewBox="0 0 9 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.768066 4.24246L3.02887 6.36196L8.30407 0.709961"
                      stroke="white"
                      stroke-width="1.413"
                    />
                  </svg>
                </div>
                Value Props
              </li>
            </ul>
          </div>

          <div className="offer-content-wrap">
            <p className="offer-content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt
            </p>

            <p className="offer-content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt
            </p>
          </div>
        </div>
        {/* offer details :: end */}
      </div>
      {/* body :: end */}

      {/* cta banner :: start */}
      <CTABanner
        isIcon={false}
        isTextCenter={true}
        ctaContent={"Get 15% Off"}
      />
      {/* cta banner :: end */}
    </div>
  );
};

export default OfferDetail;
