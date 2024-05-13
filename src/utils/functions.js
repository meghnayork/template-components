// fetch domain name and productId
export const extractDataFromUrl = (url) => {
  const searchParams = new URLSearchParams(window.location.search);
  const urlParams = new URL(url);
  const productParam = urlParams.searchParams.get("product");
  const domainParam = searchParams.has("checkout_url")
    ? urlParams.searchParams.get("checkout_url")
    : urlParams.searchParams.get("domain");
  let productIdArray = [];
  let checkoutLink = "";
  let domain = "";

  if (productParam) {
    productIdArray = productParam
      .split(",")
      .filter((item) => item.trim() !== "") // Filter out empty values
      .map((item) => {
        const [id, quantity] = item.trim().split("@");
        return { id, quantity };
      });

    const fullLink = urlParams.href;
    checkoutLink = `/d5e4dfa0-43a7-4973-b225-82b43cf5a181?${
      fullLink.split("?")[1]
    }`;
  }

  if (domainParam) {
    domain = `https://${domainParam.split("/")[2]}`;
  }

  return { productIdArray, checkoutLink, domain };
};

// fetch data from domain
export const fetchHighestPriceProduct = (
  domain,
  productId,
  setFilteredProducts
) => {
  if (domain) {
    fetch(`${domain}/products.json`)
      .then((response) => response.json())
      .then((data) => {
        const filteredProducts = data.products.filter((product) =>
          productId.some(({ id }) =>
            product.variants.some((variant) => variant.id == id)
          )
        );

        const productWithHighestPrice = filteredProducts.reduce(
          (prevProduct, currentProduct) => {
            return parseFloat(currentProduct.variants[0].price) >
              parseFloat(prevProduct.variants[0].price)
              ? currentProduct
              : prevProduct;
          },
          filteredProducts[0]
        );

        setFilteredProducts(productWithHighestPrice);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }
};
