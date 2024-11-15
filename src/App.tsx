import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ProductProvider } from './components/ProductContext/ProductContext';
import HomeLayout from "./layout/HomeLayout";
import Home from "./pages/Home";
import StoreSearch from "./pages/StoreSearch";
import Product from "./pages/Product";
import StartWrok from "./pages/StartWrok";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Checkout from "./pages/Checkout";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import BrowseJobs from "./pages/browsejobs/BrowseJobs";
import JobDetails from "./pages/jobDetails/JobDetails";
import ProductDetails from "./components/product/ProductDetails";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/store",
          element: <StoreSearch />,
        },
        {
          path: "/ProductDetails/books/:id",
          element: <ProductDetails />,
        },
        {
          path: "/products/:id",
          element: <Product />,
        },
        {
          path: "/start-work",
          element: <StartWrok />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/checkout",
          element: <Checkout />,
        },
        {
          path: "/jobs",
          element: <BrowseJobs />,
        },
        {
          path: "/jobs/:jobId",
          element: <JobDetails />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return (
    <ProductProvider>
      <RouterProvider router={router} />
    </ProductProvider>
  );
}

export default App;
