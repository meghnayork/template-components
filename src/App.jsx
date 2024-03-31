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
} from "./pages";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
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
      path: "/products",
      element: <Products />,
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
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
