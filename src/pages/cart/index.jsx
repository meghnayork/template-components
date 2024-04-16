import React, { useEffect, useState } from "react";
import Header from "../../components/header";
import CTABanner from "../../components/ctaBanner";
import AnnouncementBar from "../../components/announcementBar";
import ProgressBar from "../../components/progressBar";
import HorizontalProductCard from "../../components/horizontalProductCard";
import RelevantProductCard from "../../components/relevantProductCard";

let addBtn = "Add to My Order";

const Cart = () => {
  const [productId, setProductId] = useState([]);
  const [domain, setdomain] = useState("");
  const [checkout, setCheckout] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [relevantProduct, setRelevantProduct] = useState([]);
  const [totalPrice, setTotalPrice] = useState(50);
  const [staticProduct, setStaticProduct] = useState([
    {
      productId: 1,
      title: "Product 1",
      desc: "Variant",
      price: 22,
    },
  ]);
  const [staticRel, setStaticRel] = useState([
    {
      productId: 101,
      title: "Product 101",
      desc: "Variant",
      price: 20,
      addBtn: "Add to My Order",
    },
    {
      productId: 102,
      title: "Product 102",
      desc: "Variant",
      price: 22,
      addBtn: "Add to My Order",
    },
    {
      productId: 103,
      title: "Product 103",
      desc: "Variant",
      price: 22,
      addBtn: "Add to My Order",
    },
    {
      productId: 104,
      title: "Product 104",
      desc: "Variant",
      price: 22,
      addBtn: "Add to My Order",
    },
  ]);

  // get domain and product :: start
  useEffect(() => {
    const url = new URL(window.location.href);
    const productParam = url.searchParams.get("product");
    const domainParam = url.searchParams.get("domain");

    if (productParam) {
      const productIdsArray = productParam.split(",").map((item) => {
        const [id, quantity] = item.trim().split("@");
        return { id, quantity };
      });
      setProductId(productIdsArray);
    }

    if (domainParam) {
      setdomain(`https://${domainParam.split("/")[2]}`);
    }
  }, []);
  // get domain and product :: end

  // get cart item and relevant product :: start
  useEffect(() => {
    if (domain) {
      fetch(`${domain}/products.json`)
        .then((response) => response.json())
        .then((data) => {
          const filteredProducts = data.products.reduce((acc, product) => {
            const matchingVariants = product.variants.filter((variant) =>
              productId.some(({ id }) => variant.id == id)
            );

            matchingVariants.forEach((variant) => {
              if (
                !acc.some((item) =>
                  item.variants.some((v) => v.id === variant.id)
                )
              ) {
                acc.push({ ...product, variants: [variant] });
              }
            });

            return acc;
          }, []);

          const productsWithQuantity = filteredProducts.map((product) => {
            const matchedProduct = productId.find(({ id }) =>
              product.variants.some((variant) => variant.id == id)
            );
            const quantity = matchedProduct
              ? parseFloat(matchedProduct.quantity)
              : 0;
            return { ...product, quantity };
          });

          const nonIncludedProducts = data.products.filter(
            (product) =>
              !productId.some(({ id }) =>
                product.variants.some((variant) => variant.id === id)
              )
          );

          const firstFourNonIncludedProducts = nonIncludedProducts.slice(0, 4);
          setRelevantProduct(firstFourNonIncludedProducts);

          setFilteredProducts(productsWithQuantity);
        })
        .catch((error) => console.error("Error fetching products:", error));
    }
  }, [domain, productId]);
  // get cart item and relevant product :: end

  // cart update :: start
  useEffect(() => {
    if (filteredProducts.length > 0) {
      const total = filteredProducts.reduce(
        (acc, product) => acc + product.quantity * product.variants[0].price,
        0
      );
      setTotalPrice(total);

      generateCartLink();
    } else {
      setTotalPrice(50);
      setCheckout("");
    }
  }, [filteredProducts]);
  // cart update :: end
  // remove product from cart :: start
  const removeProduct = (productIdToRemove) => {
    setFilteredProducts(
      filteredProducts.filter(
        (product) => product.variants[0].id !== productIdToRemove
      )
    );

    const removedProduct = relevantProduct.find(
      (product) => product.variants[0].id === productIdToRemove
    );

    if (removedProduct) {
      setRelevantProduct((prevProducts) =>
        prevProducts.map((product) =>
          product.variants[0].id === productIdToRemove
            ? { ...product, addBtn: addBtn }
            : product
        )
      );
    }
  };

  const deleteProduct = (id) => {
    setStaticProduct(staticProduct.filter((pro) => pro.productId !== id));

    const removedProduct = staticRel.find(
      (product) => product.productId === id
    );

    if (removedProduct) {
      setStaticRel((pro) =>
        pro.map((product) =>
          product.productId === id
            ? { ...product, addBtn: "Add to My Order" }
            : product
        )
      );
    }
  };
  // remove product from cart :: end

  // update quantity in cart :: start
  const updateQuantity = (productIdToUpdate, newQuantity) => {
    const updatedProducts = filteredProducts.map((product) => {
      if (product.variants[0].id === productIdToUpdate) {
        return { ...product, quantity: newQuantity };
      }
      return product;
    });

    setFilteredProducts(updatedProducts);
  };
  // update quantity in cart :: end

  // add from relevant products :: start
  const addToCart = (productIdToAdd) => {
    const productToAdd = relevantProduct.find(
      (product) => product.variants[0].id === productIdToAdd
    );
    if (productToAdd) {
      setFilteredProducts([
        ...filteredProducts,
        { ...productToAdd, quantity: 1 },
      ]);

      setRelevantProduct((prevProducts) =>
        prevProducts.map((product) =>
          product.variants[0].id === productIdToAdd
            ? { ...product, addBtn: "Added!" }
            : product
        )
      );
    }
  };

  const staticAddToCart = (id) => {
    const productToAdd = staticRel.find((product) => product.productId === id);
    if (productToAdd) {
      setStaticProduct([...staticProduct, { ...productToAdd, quantity: 1 }]);

      setStaticRel((prevProducts) =>
        prevProducts.map((product) =>
          product.productId === id ? { ...product, addBtn: "Added!" } : product
        )
      );
    }
  };
  // add from relevant products :: end

  // generate cart link :: start
  const generateCartLink = () => {
    const productStrings = filteredProducts
      .map((product) => product.variants[0].id + ":" + product.quantity)
      .join(",");
    // Constructing the link
    setCheckout(`${domain}/cart/${productStrings}`);
  };
  // generate cart link :: end

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
        className={"bg-mid-blue"}
        position={"relative"}
        content={`We’ve reserved your order! <br /> Checkout within <b>9:38</b> to guarantee your order.`}
      />
      {/* announcement bar :: end */}

      <div className="body-content">
        <>
          {/* progressbar :: start */}
          <ProgressBar addedAmout={totalPrice} totalAmout={200} />
          {/* progressbar :: end */}

          {/* product card :: start */}
          <div className="cart-item-wrap">
            <h3 className="section-title">Your Cart</h3>
            {filteredProducts.length > 0
              ? filteredProducts.map((product) => (
                  <HorizontalProductCard
                    productImg={product.variants[0].featured_image.src}
                    title={product.title}
                    desc={product.variants[0].title}
                    price={product.variants[0].price}
                    qty={product.quantity}
                    updateQuantity={(newQuantity) =>
                      updateQuantity(product.variants[0].id, newQuantity)
                    }
                    remove={() => removeProduct(product.variants[0].id)}
                    totalPrice={(data) => console.log(data)}
                  />
                ))
              : staticProduct.map((product) => (
                  <HorizontalProductCard
                    title={product.title}
                    desc={product.desc}
                    price={product.price}
                    totalPrice={(data) => console.log(data)}
                    updateQuantity={(newQuantity) => console.log(newQuantity)}
                    remove={() => deleteProduct(product.productId)}
                  />
                ))}
          </div>

          <h3 className="section-title">You May Also Like</h3>
          <div className="relevant-product-wrap pb-extra-50">
            {relevantProduct.length > 0
              ? relevantProduct.map((product) => (
                  <RelevantProductCard
                    img={product.variants[0].featured_image.src}
                    title={product.title}
                    amount={`$${product.variants[0].price}`}
                    discount={"-20%"}
                    addToCart={() => addToCart(product.variants[0].id)}
                    btnText={product.addBtn || addBtn}
                  />
                ))
              : staticRel.map((product) => (
                  <RelevantProductCard
                    title={product.title}
                    amount={`$${product.price}`}
                    discount={"-20%"}
                    addToCart={() => staticAddToCart(product.productId)}
                    btnText={product.addBtn}
                  />
                ))}
          </div>
          {/* product card :: end */}
        </>
      </div>

      {/* cta banner :: start */}
      <CTABanner ctaContent={"Checkout Now"} link={checkout} />
      {/* cta banner :: end */}
    </div>
  );
};

export default Cart;
