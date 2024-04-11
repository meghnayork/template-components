import React from "react";
import Header from "../../components/header";
import CTABanner from "../../components/ctaBanner";
import ProductCard from "../../components/productCard";

const Products = () => {
  const products = [
    {
      img: "https://pierson-public-static.s3.us-east-2.amazonaws.com/Assets/ring-product1.svg",
      name: "Laurel Volcanic Ash",
      price: "$33.99",
      rating: 4,
      offer: "20% Off",
      link: "https://d1ofuudqlu2e8.cloudfront.net/55a6c289-4722-46a8-9487-1075838d8a01",
      // category: "Category"
    },
    {
      img: "https://pierson-public-static.s3.us-east-2.amazonaws.com/Assets/ring-product2.svg",
      name: "Tides Silver",
      price: "$35.99",
      rating: 4,
      // offer: "20% Off",
      category: "Best Seller!",
      link: "https://d1ofuudqlu2e8.cloudfront.net/55a6c289-4722-46a8-9487-1075838d8a01",
    },
    {
      img: "https://pierson-public-static.s3.us-east-2.amazonaws.com/Assets/ring-product3.svg",
      name: "Mermaid Waves",
      price: "$29.99",
      rating: 3,
      // offer: "20% Off",
      // category: "Category"
      link: "https://d1ofuudqlu2e8.cloudfront.net/55a6c289-4722-46a8-9487-1075838d8a01",
    },
    {
      img: "https://pierson-public-static.s3.us-east-2.amazonaws.com/Assets/ring-product4.svg",
      name: "Alexandrite Surf",
      price: "$49.99",
      rating: 4,
      // offer: "20% Off",
      // category: "Category"
      link: "https://d1ofuudqlu2e8.cloudfront.net/55a6c289-4722-46a8-9487-1075838d8a01",
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
