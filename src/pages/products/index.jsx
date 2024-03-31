import React from "react";
import Header from "../../components/header";
import CTABanner from "../../components/ctaBanner";
import ProductCard from "../../components/productCard";

const Products = () => {
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
      {/* header :: start */}
      <Header
        position={"relative"}
        logoCircle={true}
        logoImg={"https://d1unenfz496pdf.cloudfront.net/Assets/logo-white.png"}
        brandTitle={"Brand Logo Title"}
        variant="solid"
      />
      {/* header :: end */}

      {/* product grid :: start */}
      <div className="product-listing">
        {products.map((item, index) => (
          <ProductCard
            key={index}
            productImg={item.img}
            name={item.name}
            price={item.price}
            rating={item.rating}
            offer={item.offer}
            category={item.category}
          />
        ))}
      </div>
      {/* product grid :: end */}

      {/* cta banner :: start */}
      <CTABanner ctaContent={"Get 15% Off"} />
      {/* cta banner :: end */}
    </div>
  );
};

export default Products;
