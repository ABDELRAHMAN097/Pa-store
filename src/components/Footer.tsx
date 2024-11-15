import React from 'react';
// import './Footer.css'; // Optional: Include your CSS file for styling

const Footer: React.FC = () => {
  return (
    <footer id="footer">
      {/* top footer */}
      <div className="section">
        {/* container */}
        <div className="container">
          {/* row */}
          <div className="row">
            <div className="col-md-3 col-xs-6">
              <div className="footer">
                <h3 className="footer-title">PA Store</h3>
                <p>PA Store is a part of PA Group , it's considered to promote the PA courses, books and Start work</p>
                <ul className="footer-links mt-[10px]">
                  <li><a href="#"><i className="fa fa-map-marker"></i>Palestine, Gaze</a></li>
                  <li><a href="#"><i className="fa fa-envelope-o"></i>pa-store@gmail.com</a></li>
                  <li><a href="#"><i className="fa fa-phone"></i>+021-95-51-84</a></li>
                </ul>
              </div>
            </div>

            <div className="col-md-3 col-xs-6">
              <div className="footer">
                <h3 className="footer-title">Categories</h3>
                <ul className="footer-links">
                  <li><a href="#">Books</a></li>
                  <li><a href="#">Courses</a></li>
                  <li><a href="#">Start Work</a></li>
                </ul>
              </div>
            </div>

            <div className="clearfix visible-xs"></div>

            <div className="col-md-3 col-xs-6">
              <div className="footer">
                <h3 className="footer-title">Information</h3>
                <ul className="footer-links">
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Contact Us</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Orders and Returns</a></li>
                  <li><a href="#">Terms & Conditions</a></li>
                </ul>
              </div>
            </div>

            <div className="col-md-3 col-xs-6">
              <div className="footer">
                <h3 className="footer-title">Service</h3>
                <ul className="footer-links">
                  <li><a href="#">My Account</a></li>
                  <li><a href="#">View Cart</a></li>
                  <li><a href="#">account</a></li>
                  <li><a href="#">Track My Order</a></li>
                  <li><a href="#">Help</a></li>
                </ul>
              </div>
            </div>
          </div>
          {/* /row */}
        </div>
        {/* /container */}
      </div>
      {/* /top footer */}

      {/* bottom footer */}
      <div id="bottom-footer" className="section">
        <div className="container">
          {/* row */}
          <div className="row">
            <div className="col-md-12 text-center">
              <ul className="footer-payments">
                <li><a href="#"><i className="fa text-white fa-cc-visa"></i></a></li>
                <li><a href="#"><i className="fa text-white fa-credit-card"></i></a></li>
                <li><a href="#"><i className="fa text-white fa-cc-paypal"></i></a></li>
                <li><a href="#"><i className="fa text-white fa-cc-mastercard"></i></a></li>
                <li><a href="#"><i className="fa text-white fa-cc-discover"></i></a></li>
                <li><a href="#"><i className="fa text-white fa-cc-amex"></i></a></li>
              </ul>
              <span className="copyright">
                Copyright &copy; {new Date().getFullYear()} All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer" className='text-primary-text !text-xl'>PA Tech</a>
              </span>
            </div>
          </div>
          {/* /row */}
        </div>
        {/* /container */}
      </div>
      {/* /bottom footer */}
    </footer>
  );
};

export default Footer;
