import Header from "../components/Header";
import Footer from '../components/Footer';
import Newsletter from '../components/Home/NewsLetter';
import { Outlet, useLocation } from "react-router-dom";
import HomeNavigation from "../components/Home/HomeNavigation";
import { useEffect, useState } from "react";
import Loader from "../components/helpers/Loader";

const HomeLayout = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Scroll to top on location change
    window.scrollTo(0, 0);
    
    // Simulate loading
    setIsLoading(true);
    const timeOut = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => {
      clearTimeout(timeOut);
    };
  }, [location]);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <HomeNavigation />
          <Outlet />
          <Newsletter />
          <Footer />
        </>
      )}
    </div>
  );
};

export default HomeLayout;
