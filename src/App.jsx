import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  Home,
  Cart,
  Shop,
  Products,
  OfferDetail,
  OfferListing,
  SidePreview,
  VideoSlider,
  Home2,
  Home3,
  HomeCta,
  HomeMegaCta,
  ShopStandard,
  ShopStandardImg,
  ShopCarousel,
  ProductGrid,
  GatedOffer,
  MiniPdp,
  SingleVideo,
  ProgramSignup,
} from "./pages";
import ErrorPage from "./pages/404";
import VideoTest from "./pages/videoTest";

function App() {
  const router = createBrowserRouter([
    {
      path: "f3a94814-f4dc-492b-8e9d-28544b209e8d",
      element: <Home />,
    },
    {
      path: "95bf8648-bcd4-4447-b3d1-56e1bd5488a6", // Home2
      element: <Home2 />,
    },
    {
      path: "e6b588ce-2d46-4aec-9218-2f687f36d232", // home3
      element: <Home3 />,
    },
    {
      path: "5e8e9fd2-64d6-4393-8066-2e9b26bd4899", // home-cta
      element: <HomeCta />,
    },
    {
      path: "8083256c-41ff-4eb1-8d09-9caa191ca231", // home-mega-cta
      element: <HomeMegaCta />,
    },
    {
      path: "d5e4dfa0-43a7-4973-b225-82b43cf5a181", // cart
      element: <Cart />,
    },
    {
      path: "5b7ae178-be61-4904-b0c0-f80d4e6e4820", // shop
      element: <Shop />,
    },
    {
      path: "ee755fa2-f671-4e41-b6d3-2384d797cb0b", // shop-standard
      element: <ShopStandard />,
    },
    {
      path: "c6ba4ed1-82ab-4954-add4-3ad08775e4bc", // shop-standard-img
      element: <ShopStandardImg />,
    },
    {
      path: "ed5ddf90-0429-44f6-a99a-6fef907b6f04", // shop-carousel
      element: <ShopCarousel />,
    },
    {
      path: "3a1c8d4c-d1b3-4a26-b345-a8a42631f79b", // products
      element: <Products />,
    },
    {
      path: "472028af-c65b-4803-a70c-c7809f1fa00e", // product-grid
      element: <ProductGrid />,
    },
    {
      path: "8d0c8283-95e4-40c0-a578-9076cc1c4339", // offer-detail
      element: <OfferDetail />,
    },
    {
      path: "aaefc2f7-a2d5-40bb-84f2-8e2c7dedd69f", // offer-listing
      element: <OfferListing />,
    },
    {
      path: "9b7380f8-9fed-42c6-9286-7c5cf135a8c8", // side-preview
      element: <SidePreview />,
    },
    {
      path: "33f7bf1b-84ca-4d81-8fd1-6d7d48860e9a", // video-slider
      element: <VideoSlider />,
    },
    {
      path: "7b8edfcb-6bc6-462d-af46-4a561fb67dc1", // gated-offer
      element: <GatedOffer />,
    },
    {
      path: "aa34594f-7a7d-4411-a091-0456d6fcc57f", // mini-pdp
      element: <MiniPdp />,
    },
    {
      path: "7b4969dd-6542-41e3-abff-0867e9371257", // single-video
      element: <SingleVideo />,
    },
    {
      path: "54fb5bc7-9afd-450e-9bff-7412e86c4993", // program-signup
      element: <ProgramSignup />,
    },
    {
      path: "f722ceb1-fb24-4689-a736-68ed7ac826da", // video-test
      element: <VideoTest />,
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
