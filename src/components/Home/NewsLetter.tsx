import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Newsletter: React.FC = () => {
  return (
    <div id="newsletter" className="section !mt-0">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="newsletter">
              <p>اشترك في <strong className='text-primary-text hover:bg-primary-text-hover'>النشرة الإخبارية</strong></p>
              <form>
                <input className="input" type="email" placeholder="أدخل بريدك الإلكتروني" required />
                <button className="newsletter-btn" type="submit">
                  اشتراك
                </button>
              </form>
              <ul className="newsletter-follow">
                <li>
                  <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
                </li>
                <li>
                  <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                </li>
                <li>
                  <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                </li>
                <li>
                  <a href="#"><FontAwesomeIcon icon={faPinterest} /></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
