import React from "react";
import Header from "../../components/header";
import VideoBanner from "../../components/videoBanner";
import ProductCard from "../../components/productCard";
import CTABanner from "../../components/ctaBanner";

const ProductGrid = () => {
  const products = [
    {
      img: "https://pierson-public-static.s3.us-east-2.amazonaws.com/Assets/HarryPotter_GoldenSnitch.png",
      name: "Product Name",
      price: "$22",
      rating: 5,
      offer: "20% Off",
      // category: "Category"
    },
    {
      img: "https://pierson-public-static.s3.us-east-2.amazonaws.com/Assets/HarryPotter_GoldenSnitch.png",
      name: "Product Name",
      price: "$22",
      rating: 5,
      // offer: "20% Off",
      category: "Best Seller!",
    },
    {
      img: "https://pierson-public-static.s3.us-east-2.amazonaws.com/Assets/HarryPotter_GoldenSnitch.png",
      name: "Product Name",
      price: "$22",
      rating: 5,
      // offer: "20% Off",
      // category: "Category"
    },
    {
      img: "https://pierson-public-static.s3.us-east-2.amazonaws.com/Assets/HarryPotter_GoldenSnitch.png",
      name: "Product Name",
      price: "$22",
      rating: 5,
      // offer: "20% Off",
      // category: "Category"
    },
  ];

  return (
    <div className="mobile-slide">
      <div className="position-relative">
        {/* header :: start */}
        <Header
          logoImg={
            "https://d1unenfz496pdf.cloudfront.net/Assets/logo-white.png"
          }
          brandTitle={"AM Routine with Oars + Alps"}
        />
        {/* header :: end */}

        {/* video banner :: start */}
        <VideoBanner
          className="h-93vh"
          video={
            "https://pierson-public-static.s3.us-east-2.amazonaws.com/Assets/four-sigmatic-video1.mp4"
          }
        />
        {/* video banner :: end */}

        {/* cta banner :: start */}
        <CTABanner
          ctaContent={"Subscribe and Save Upto 35%"}
          link={"https://us.foursigmatic.com/collections/coffee-and-creamers"}
        />
        {/* cta banner :: end */}
      </div>

      {/* product grid :: start */}
      <div className="product-listing pb-extra-100">
        {products.map((item, index) => (
          <ProductCard
            key={index}
            productImg={item.img}
            name={item.name}
            price={item.price}
            rating={item.rating}
          />
        ))}
      </div>
      {/* product grid :: end */}
    </div>
  );
};

export default ProductGrid;
