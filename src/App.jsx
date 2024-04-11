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
      path: "/",
      element: <Home />,
    },
    {
      path: "/home2",
      element: <Home2 />,
    },
    {
      path: "/home3",
      element: <Home3 />,
    },
    {
      path: "/home-cta",
      element: <HomeCta />,
    },
    {
      path: "/home-mega-cta",
      element: <HomeMegaCta />,
    },
    {
      path: "/cart",
      element: <Cart />,
    },
    {
      path: "/shop",
      element: <Shop />,
    },
    {
      path: "/shop-standard",
      element: <ShopStandard />,
    },
    {
      path: "/shop-standard-img",
      element: <ShopStandardImg />,
    },
    {
      path: "/shop-carousel",
      element: <ShopCarousel />,
    },
    {
      path: "/products",
      element: <Products />,
    },
    {
      path: "/product-grid",
      element: <ProductGrid />,
    },
    {
      path: "/offer-detail",
      element: <OfferDetail />,
    },
    {
      path: "offer-listing",
      element: <OfferListing />,
    },
    {
      path: "/side-preview",
      element: <SidePreview />,
    },
    {
      path: "/video-slider",
      element: <VideoSlider />,
    },
    {
      path: "/gated-offer",
      element: <GatedOffer />,
    },
    {
      path: "/mini-pdp",
      element: <MiniPdp />,
    },
    {
      path: "/single-video",
      element: <SingleVideo />,
    },
    {
      path: "/program-signup",
      element: <ProgramSignup />,
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
    {
      path: "video-test",
      element: <VideoTest />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
