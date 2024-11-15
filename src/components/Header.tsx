import React from "react";
import { Link } from "react-router-dom";
// import './Header.css'; // Optional: Include your CSS file for styling

const Header: React.FC = () => {
  return (
    <header className="overflow-hidden">
      {/* رأس الصفحة العلوي */}
      <div id="top-header">
        <div className="container">
          <ul className="header-links pull-left">
            <li>
              <a href="#">
                <i className="fa fa-envelope-o"></i> pa-store@gmail.com
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-map-marker"></i> فلسطين، غزة
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* /رأس الصفحة العلوي */}

      {/* رأس الصفحة الرئيسي */}
      <div id="header">
        <div className="container">
          <div className="row">
            {/* الشعار */}
            <div className="flex justify-between items-center">
              <div className="col-md-3">
                <div className="header-logo w-fit">
                  <Link to="/" className="logo">
                    <img
                      src="/img/pa-store-logo.png"
                      className="w-[200px]"
                      alt="شعار"
                    />
                  </Link>
                </div>
              </div>
              {/* /الشعار */}
              <div className="col-md-3 w-fit clearfix">
                <div className="header-ctn flex !justify-between !items-center">
                  {/* الحساب */}
                  <div>
                    <Link to="/login" className="hover:text-primary-text">
                      <i className="fa fa-user"></i>
                      <span className="">تسجيل الدخول</span>
                    </Link>
                  </div>

                  {/* السلة */}
                  <div className="dropdown ">
                    <Link
                      to={"/cart"}
                      className="hover:text-primary-text cursor-pointer"
                      data-toggle="dropdown"
                      aria-expanded="true"
                    >
                      <i className="fa fa-shopping-cart"></i>
                      <span className=" ">السلة</span>
                      <div className="qty hidden">0</div>
                    </Link>
                    {/* <div className="cart-dropdown">
                    <div className="cart-list">
                      <div className="product-widget">
                        <div className="product-img">
                          <img src="./img/product01.png" alt="منتج" />
                        </div>
                        <div className="product-body">
                          <h3 className="product-name"><a href="#">اسم المنتج هنا</a></h3>
                          <h4 className="product-price"><span className="qty">1x</span>$980.00</h4>
                        </div>
                        <button className="delete"><i className="fa fa-close"></i></button>
                      </div>

                      <div className="product-widget">
                        <div className="product-img">
                          <img src="./img/product02.png" alt="منتج" />
                        </div>
                        <div className="product-body">
                          <h3 className="product-name"><a href="#">اسم المنتج هنا</a></h3>
                          <h4 className="product-price"><span className="qty">3x</span>$980.00</h4>
                        </div>
                        <button className="delete"><i className="fa fa-close"></i></button>
                      </div>
                    </div>
                    <div className="cart-summary">
                      <small>تم اختيار 3 عنصر(عناصر)</small>
                      <h5>المجموع الفرعي: $2940.00</h5>
                    </div>
                    <div className="cart-btns">
                      <a href="#">عرض السلة</a>
                      <a href="#">الدفع <i className="fa fa-arrow-circle-right"></i></a>
                    </div>
                  </div> */}
                  </div>

                  {/* زر القائمة */}
                  <div className="menu-toggle">
                    <a href="#">
                      <i className="fa fa-bars"></i>
                      <span>القائمة</span>
                    </a>
                  </div>
                  {/* /زر القائمة */}
                </div>
              </div>
            </div>

           

            {/* الحساب */}

            {/* /الحساب */}
          </div>
          {/* الصف */}
        </div>
        {/* الحاوية */}
      </div>
      {/* /رأس الصفحة الرئيسي */}
    </header>
  );
};

export default Header;
